<template>
  <div style="margin-top: 35px">
      <el-row>
        <p style="font-size: 22px;font-weight: bold;margin-left: 8%;">{{ moviedescription[0].moviename }}</p>
        <el-col :span="8" :offset="2">
          <div>
            <el-row style="margin-top: 15px">
              <el-col :span="11">
                <img :src="moviedescription[0].picture" class="image">
              </el-col>
              <el-col :span="11" :offset="1">
                <p>语言：<span style="font-size: 14px">英语</span></p>
                <p>类别：<span style="font-size: 14px">{{ moviedescription[0].typelist }}</span></p>
                <p>上映日期：<span style="font-size: 14px"></span>{{ moviedescription[0].showyear }}</p>
                <p>热度：<span style="font-size: 14px">{{ moviedescription[0].numrating }}</span></p>
                <p>总评分：<span style="font-size: 14px"></span></p>
                <el-rate
                  v-model="moviedescription[0].averating"
                  disabled
                  show-score>
                </el-rate>
                <el-button type="primary" @click="reviewDialog" class="submitBtn" round >{{ token ? "发表评论" : "前往登录后发布评论" }}</el-button>
              </el-col>
              <el-col :span="11">
                <img v-if="ifLikeThisMovie" class="like-img" src="../assets/image/like.png">
                <img @click="submitLike" v-else class="like-img" src="../assets/image/notlike.png">
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :stretch="true">
            <el-tab-pane label="简介" name="first" style="padding-left: 20px;padding-right: 20px">
              <div>
                <p style="color: #9e6fd7;margin-top: 10px;font-size: 20px;">{{ moviedescription[0].moviename }}</p>
                <p style="margin-top: 10px">{{ "导演：" + moviedescription[0].director }}</p>
                <p style="margin-top: 20px">演员表</p>
                <p style="line-height: 20px">{{ moviedescription[0].leadactors }}</p>
                <p style="margin-top: 20px">故事简介</p>
                <p style="line-height: 20px">{{ moviedescription[0].description }}</p>
              </div>
              <reviewList
                :reviewLists="reviewLists"
                ref="reviewChild"
              ></reviewList>
            </el-tab-pane>
            <el-tab-pane label="相似电影" name="second" style="padding-left: 20px;padding-right: 20px">
              <div class="similar-title">
                <el-row style="border-bottom: 1.3px solid rgba(119,125,116,0.65) ;">
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center;width: 100%">电影名</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center">类型</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center">导演</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center">评分</p></el-col>
                </el-row>
              </div>
              <div v-for="(item,key) in similarLists" :key="key"  @click="intoMovieDetail(item.movie.movieid)">
                <el-row style="border-bottom: 1px solid #ddd ;">
                  <el-col :span="6" style="align-content: center"> <p class="similar-item">{{ item.movie.moviename }}</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p class="similar-item">{{ item.movie.typelist }}</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p class="similar-item">{{ item.movie.director }}</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p class="similar-item">{{ item.movie.averating }}</p></el-col>
                </el-row>
              </div>
              <div style="margin-top: 10px; text-align:center;" v-if="similarLists == null">暂无数据</div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    <reviewPost
      :movieInfo="moviedescription"
      @refreshReview="refreshReview"
      ref="postChild"
    ></reviewPost>
  </div>
</template>
<script type="text/javascript">
  import Cookies from 'js-cookie'
  import API from '../api'
  import reviewList from '~/components/review/list.vue'
  import reviewPost from '~/components/review/post.vue'

  export default {
    name: 'movdetail',
    props: {
      moviedescription: Array,
    },
    data () {
      return {
        value:3.7,
        activeName:'first',
        token: Cookies.get("token"),
        showReview: false,
        similarLists: [],
        ifLikeThisMovie: false,
        reviewLists: [],
      }
    },
    head () {
      return {
        title: '狗眼看电影',
        meta: [
          {hid: 'description', name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no'}
        ]
      }
    },
    mounted(){
      // 请求电影评论列表
      API.movieReviewsApi({
        movieid: this.moviedescription[0].movieid,
      }).then(res => {
        if (res.code === undefined) {
          this.reviewLists = res.reviewList
          console.log("show reviewlist")
          console.log(this.reviewLists)
          this.$refs.reviewChild.getReviews(this.reviewLists)
        }
      })
      // 请求是否喜欢电影的接口
      if (this.token) {
        API.ifLikeMovieApi({
          movieid: this.moviedescription[0].movieid,
        }).then(res => {
          if (res.code === undefined) {
            this.ifLikeThisMovie = res
          }
        })
      }
    },
    methods: {
      async handleClick(tab, event) {
        // 请求相似电影接口
        if (this.activeName == "second" && this.similarLists.length == 0) {
          await API.similarMoviesApi({
            itemid: this.moviedescription[0].movieid,
          }).then(res => {
            if (res.code === undefined) {
              this.similarLists = res.similars
            }
          })
        }
      },
      reviewDialog() {
          if (this.token) {
              this.showReview = true
              this.$refs.postChild.changeShow(this.showReview)
          } else {
            this.$router.push({path: `/user/login`})
          }
      },
      intoMovieDetail (movieid) {
        let path = "/movie/" + movieid;
        this.$router.push({path: path})
      },
      refreshReview(review) {
          // 让子组件添加刚评论过的数据
          this.$refs.reviewChild.appendReview(review)
      },
      async submitLike() {
          if (this.token && !this.ifLikeThisMovie) {
            await API.submitLikeApi({
              movieid: this.moviedescription[0].movieid,
            }).then(res => {
              if (res.code === undefined) {
                alert("收藏成功")
                window.location.reload();
              }
            })
          }
      }
    },
    components: {
      reviewList, reviewPost
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .image {
    width: 100%;
    display: block;
  }
  .submitBtn {
    margin-top: 10%;
  }
  .similar-title {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .similar-item {
    margin-top: 5px;
    text-align:center;
    width: 100%;
    margin-bottom: 5px;
    word-wrap:break-word;
    cursor:pointer;
  }
  .like-img{
    margin-top: 50%;
    margin-left: 10%;
    cursor: pointer;
  }
</style>
