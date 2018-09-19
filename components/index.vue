<template>
  <div>
    <common-header></common-header>
    <div class="block">
     <el-carousel trigger="click" height="800px" :autoplay="autoplay">
       <el-carousel-item v-for="(item, key) in hotList" :key="key">
         <div class="back-ground">
           <img :src="item.backpost" alt="" />
           <div class="bd" @click="intoMovieDetail(item.movieid)">
             <p class="title">{{ item.moviename}}</p>
             <p class="smalltitle">{{ "score: " + item.averating}}</p>
             <p class="smalltitle">{{ item.description }}</p>
             <p class="smalltitle">{{ "type: " + item.typelist }}</p>
            </div>
         </div>

       </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>


<script>
  import CommonHeader  from '~/components/header'

  export default {
    props: {
      hotList: Array,
    },
    data() {
      return {
        autoplay: false,
      }
    },
    head () {
      return {
        title: 'movie recommend',
      }
    },
    methods: {
      intoMovieDetail (movieid) {
        this.$router.push({path: `/movie/$movieid`})
      }
    },
    components: {
      "common-header":   CommonHeader
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<style scoped>
  .back-ground{
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .back-ground>img{
    width: 100%;
    height: 100%;
  }
  .bd{
    position:absolute;
    width:40%;
    height:22%;
    z-indent:2;
    left:0;
    top:0;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    background-color:rgba(0,0,0,0.5);
    left: 30%;
    top: 55%;
  }
  .title{
    font-face: "微软雅黑";
    font-size: 22px;
    margin-left: 10px;
    margin-top: 5px;
  }
  .login-icon img {
    width: 100%;
  }
  .smalltitle{
    margin-left: 10px;
  }

</style>
