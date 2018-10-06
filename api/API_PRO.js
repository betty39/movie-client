export default {
  // configure
  baseURL: 'http://localhost:8087/',
  method: 'post',

  // 账户模块
  loginApi: {url: '/user/login'},
  registerApi: {url: '/user/register'},
  resetpwApi: {url: '/user/resetPw'},

  // 个人中心
  profileReviewsApi: {url: '/review/lists'},
  profileCollectsApi: {url: '/collect/lists'},
  submitReviewApi: {url: '/review/create'},
  ifLikeMovieApi: {url: '/collect/ifLikeMovie'},
  submitLikeApi: {url: '/collect/create'},

  // 电影模块
  movieDescApi: {url: '/movie/description'},
  movieReviewsApi: {url: '/review/movieReviewLists'},
  similarMoviesApi: {url: '/movie/getsimilar'},
  movsearchApi: {url: '/movie/serchbyname'},
  catelistApi: {url: '/movie/category',method:'get'},
  movlistApi: {url: '/movie/movielist'},

  // 推荐
  movieRecommendApi: {url: '/recommend/movieLists'},

}
