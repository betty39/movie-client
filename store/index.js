import Cookie from 'cookie'
import Cookies from 'js-cookie'
import API from '../api'
import _ from 'lodash'

const cookieTokenName = 'token'
const cookieTokenExpiredName = 'token_expired'
const cookieUserName = 'user'
const isBrowser = process.browser

export const state = () => ({
  user: {},
  token: '',
  tokenExpired: 0,
})

export const mutations = {
  SET_TOKEN (state, token) {
    token = token || ''
    state.token = token
    if (token && isBrowser) {
      Cookies.set(cookieTokenName, token)
    }
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
    commit('SET_TOKEN', res.authorization)
    commit('SET_TOKEN_EXPIRED', parseInt(res.expired) + parseInt(Date.now() / 1000))
    commit('SET_USER', res.user)
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
  async logout ({commit}) {
    commit('SET_TOKEN', '')
    commit('SET_TOKEN_EXPIRED', 0)
    commit('SET_USER', {})
    Cookies.remove(cookieTokenName)
    Cookies.remove(cookieTokenExpiredName)
    Cookies.remove(cookieUserName)
  },
  async update_profile ({commit, dispatch}, data) {
    let result = false
    await API.userUpdateProfile(data).then(res => {
      result = res.status
    })

    await dispatch('get_user')
    return result
  },
  async get_user ({commit, dispatch, state}) {
    await API.userProfileApi({
      token: state.token
    }).then(res => {
      commit('SET_USER', res.details)
    })
  }
}
