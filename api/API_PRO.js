export default {
  // configure
  baseURL: 'http://localhost:8086/',
  method: 'post',

  // 账户模块
  loginApi: {url: '/user/login'},
  registerApi: {url: '/user/register'},
  resetpwApi: {url: '/user/resetPw'},

  // 个人中心
  profileRviewAndReactsApi: {url: '/profile/lists'},
  submitReviewApi: {url: '/profile/review'},
  ifLikeMovieApi: {url: '/profile/ifLikeMovie'},
  submitLikeApi: {url: '/profile/rectab'},

  // 电影模块
  movieDescApi: {url: '/movie/description'},
  movieReviewsApi: {url: '/profile/movieReviewLists'},
  similarMoviesApi: {url: '/movie/getsimilar'},
  movsearchApi: {url: '/movie/serchbyname'},
  catelistApi: {url: '/movie/category',method:'get'},
  movlistApi: {url: '/movie/movielist'},

  // 推荐
  movieRecommendApi: {url: '/recommend/movieLists'},

}
