/*
 * 全局状态
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'cookie'
import Cookies from 'js-cookie'
import API from '../api'
import _ from 'lodash'

Vue.use(Vuex)
const cookieTokenName = 'token'
const cookieTokenExpiredName = 'token_expired'
const cookieUserName = 'user'
const cookieType = 'type'
const cookieTypename = 'typename'
const cookieName = 'name'
const cookicollegeCode = 'collegeCode'
const cookiepartyStatus = 'partyStatus'
const isBrowser = process.browser

export const state = () => ({
  tdk: {},
  supportWechatLogin: false,
  type: 0,
  partyStatus: '',
  collegeCode: -1
})

export const mutations = {
  SET_TDK (state, tdk) {
    state.tdk = tdk
  },
  SET_TOKEN (state, token) {
    token = token || ''
    state.token = token
    if (token && isBrowser) {
      Cookies.set(cookieTokenName, token)
    }
  },
  SET_TYPE (state, type) {
    type = type || 0
    state.type = type
    if (type === 0) {
      Cookies.set(cookieTypename, '普通学生')
    } else if (type === 1) {
      Cookies.set(cookieTypename, '党委秘书')
    } else if (type === 2) {
      Cookies.set(cookieTypename, '党支部书记')
    } else if (type === 3) {
      Cookies.set(cookieTypename, '团支部书记')
    }  else if (type === 4) {
      Cookies.set(cookieTypename, '辅导员')
    } else if (type === 5) {
      Cookies.set(cookieTypename, '上级党委')
    }  else if (type === 6) {
      Cookies.set(cookieTypename, '学生&党委秘书')
    }
    Cookies.set(cookieType, type)
  },
  SET_partyStatus (state, partyStatus) {
    partyStatus = partyStatus || ''
    state.partyStatus = partyStatus
    Cookies.set(cookiepartyStatus, partyStatus)
  },
  SET_collegeCode (state, collegeCode) {
    collegeCode = collegeCode || 0
    state.collegeCode = collegeCode
    Cookies.set(cookicollegeCode, collegeCode)
  },
  SET_TOKEN_EXPIRED (state, expired) {
    state.tokenExpired = expired
    if (expired && isBrowser) {
      Cookies.set(cookieTokenExpiredName, expired)
    }
  },
  SET_USER (state, user) {
    user = user || {}
    state.user = _.isObject(user) ? user : JSON.parse(user)
    if (user && isBrowser) {
      Cookies.set(cookieUserName, user)
    }
  }
}

export const actions = {
  async nuxtClientInit ({commit}, context) {
    await context.store.dispatch('auth/load_token', context)
    await context.store.dispatch('auth/load_user', context)
  },
  async load_token ({commit}, {req}) {
    const cookieStr = isBrowser ? document.cookie : req.headers.cookie
    const cookies = Cookie.parse(cookieStr || '') || {}
    commit('SET_TOKEN', cookies[cookieTokenName])
    commit('SET_TOKEN_EXPIRED', cookies[cookieTokenExpiredName])
  },
  async check_token_expired ({commit, state, dispatch}) {
    let token = state.token
    let tokenExpired = state.tokenExpired
    let timestamp = parseInt(Date.now() / 1000)

    return token && tokenExpired > 0 && tokenExpired - timestamp < 1
  },
  async load_user ({commit}, {req}) {
    const cookieStr = isBrowser ? document.cookie : req.headers.cookie
    const cookies = Cookie.parse(cookieStr || '') || {}
    commit('SET_USER', cookies[cookieUserName])
  },
  async auth_success ({commit, dispatch}, res) {
    commit('SET_TOKEN', res.token)
    commit('SET_TYPE', res.info.type)
    if (res.info.studentInfo.partyStatus) {
      commit('SET_partyStatus', res.info.studentInfo.partyStatus)
    }
    // 设置学院代码cookie
    if (res.info.studentInfo.collegeCode) {
      commit('SET_collegeCode', res.info.studentInfo.collegeCode)
      Cookies.set(cookieName, res.info.studentInfo.name)
    }
    if (res.info.adminInfo.collegeCode) {
      commit('SET_collegeCode', res.info.adminInfo.collegeCode)
      Cookies.set(cookieName, res.info.adminInfo.name)
    }
    commit('SET_TOKEN_EXPIRED', parseInt(res.expired) + parseInt(Date.now() / 1000))
  },
  async login ({commit, dispatch}, data) {
    let result = -1
    await API.loginApi(data).then(res => {
      if (res.code === undefined) {
        dispatch('auth_success', res)
      }
      result = res.code
    })
    return result
  },
  async logout ({commit}, data) {
    let result = false
    await API.logoutApi(data).then(res => {
      result = res.status
      if (result) {
        commit('SET_TOKEN', '')
        commit('SET_TOKEN_EXPIRED', 0)
        commit('SET_USER', {})
        Cookies.remove(cookieTokenName)
        Cookies.remove(cookieTokenExpiredName)
        Cookies.remove(cookieUserName)
      }
    })
  }
}
