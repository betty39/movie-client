export default {
  // configure
  baseURL: 'http://localhost:8080/',
  method: 'post',

  loginApi: {url: '/user/login'},
  registerApi: {url: '/user/register'},
  movsearchApi: {url: '/movie/serchbyname'},
  catelistApi: {url: '/movie/category',method:'get'},
  movlistApi: {url: '/movie/movielist'},
}
