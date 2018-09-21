export default {
  // configure
  baseURL: 'http://localhost:8080/',
  method: 'post',

  // 账户模块
  loginApi: {url: '/user/login'},
  registerApi: {url: '/user/register'},
  movsearchApi: {url: '/movie/serchbyname'},
  catelistApi: {url: '/movie/category',method:'get'},
  movlistApi: {url: '/movie/movielist'},
  resetpwApi: {url: '/user/resetPw'},

  // 个人中心
  profileRviewAndReactsApi: {url: '/profile/lists'},
}
