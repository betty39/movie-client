<template>
  <div style="margin-top: 20px">
    <el-col :span="12" :offset="2">
      <el-col :span="24" :offset="2">
    <div class="cheklist">
      <el-radio-group v-model="checkedCities" @change="handleCheckedCitiesChange" >
        <el-radio v-for="city in categorys" :label="city.categoryid" :key="city.categoryid" style="margin-top: 10px">{{city.category}}</el-radio>
      </el-radio-group>
    </div>
      </el-col>

    <div class="movcard-list">
      <el-row>
        <el-col :span="6" v-if="movlist.length >0" v-for="item in movlist" :key="item.movieid" :offset="2" >
          <div @click="intoMovieDetail(item.movieid)">
          <el-card :body-style="{ padding: '0px' }" style="margin-top: 10px" >
            <img v-bind:src="item.movie.picture" class="image">
            <div style="padding: 10px;">
              <p style="font-size: 16px;max-lines: 3;height: 46px">{{item.movie.moviename}} <span style="color: #9e6fd7">{{item.movie.averating}}</span></p>
              <div class="bottom clearfix">
                <p class="time" style="max-lines: 1;line-height: 15px;font-size: 14px;color: #8c939d;overflow:hidden;text-overflow:ellipsis;
white-space:nowrap;">{{ item.movie.showyear }}</p>
              </div>
            </div>
          </el-card>
          </div>
        </el-col>
      </el-row>
      <div v-if="isshowbtn">
      <el-button type="primary" round style="margin-left: 47%;margin-top: 10px;margin-bottom: 20px" @click="handleCurrentChange">查看更多</el-button>
      </div>
      <div v-if="!isshowbtn">
        <p style="margin-left: 47%;margin-top: 10px;margin-bottom: 20px">没有更多了</p>
      </div>
    </div>
    </el-col>
    <el-col :span="7" :offset="2" style="margin-top: 90px;margin-bottom: 30px; width: 25%;" v-if="movieRecommentList.length > 0">
      <el-card class="box-card">

        <div>
          <p style="line-height: 30px;font-size: 20px;font-weight: bold;border-bottom: 1px solid #e8e4ea ;color: #8c939d">推荐电影</p>
        </div>

        <div style="cursor: pointer" v-for="(item,key) in movieRecommentList" :key="key" @click="intoMovieDetail(item.movieId)">
          <el-row style="border-bottom: 1px solid #f6f2f8 ;">
            <el-col :span="18">
              <p style="line-height: 40px">{{ item.movie.moviename }}</p>
            </el-col>
            <el-col :span="6">
              <p style="text-align: right;line-height: 40px">{{ item.rating + "分" }}</p>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </div>
</template>
<script type="text/javascript">
  import API from '../api'
  import Cookies from 'js-cookie'
  export default {
    name: 'Login',
    data () {
      return {
        checkAll: false,
        checkedCities: 1,
        currentotherPage:1,
        categorys: [{
          categoryid:'',
          category:'',
        }],
        token: Cookies.get("token"),
        isshowbtn: true,
        isIndeterminate: true,
        currentDate: new Date(),
        movieRecommentList: [],
        movlist:[],
        page: 1,
        size: 20,
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
    mounted:function () {
      this.resqtcatelist()
      this.movlist = []
      this.resqtmovlist()
      // 请求推荐电影列表的接口
      if (this.token){
        API.movieRecommendApi({
        }).then(res => {
          this.movieRecommentList = res.movies
          this.movieRecommentList.forEach(function (ele, index) {
            ele['rating'] = ele['rating'].toFixed(1)
          })
        })
      }
    },
    methods: {
      handleCheckedCitiesChange(value) {
        this.checkedCities = value
        this.movlist = []
        this.resqtmovlist()
      },
      resqtcatelist() {
        let data = {
        }
        API.catelistApi(data).then(res => {
          this.categorys=res.category_tab
        })
      },
      resqtmovlist() {
        let data = {
          categoryid: this.checkedCities,
          page:this.currentotherPage,
          size:21
        }
        API.movlistApi(data).then(res => {
          if (res.movieList.length === 0) {
            this.isshowbtn = false
          } else {
            this.isshowbtn = true
            this.movlist=this.movlist.concat(res.movieList)
          }


        })
      },
      intoMovieDetail (movieid) {
        let path = "/movie/" + movieid;
        this.$router.push({path: path})
      },
      handleCurrentChange () {
        this.currentotherPage = this.currentotherPage + 1
        this.resqtmovlist(this.currentotherPage)
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .movcard-list {
      margin-top: 80px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 178px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
