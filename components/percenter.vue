<template>
  <div style="">
      <el-row>
        <el-col :span="20" :offset="2">
          <div >
              <div class="perheader">
                <el-row >
                  <el-col :span="12" style="margin-top: 260px">
                    <el-row>
                      <el-col :span="5" :offset="1">
                        <img src="../assets/image/user_avatar.jpg" class="userimg">
                      </el-col>
                      <el-col :span="12" :offset="2" style="margin-top: 60px">
                        <p style="line-height: 30px;font-size: 20px;font-weight: bold">{{loginUser.username}}</p>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="11" style=";margin-top: 315px">
                    <el-button type="primary" style="float: right" plain @click="dialogVisible = true">修改密码</el-button>
                  </el-col>
                </el-row>
              </div>
           <div class="useravater">

           </div>
          </div>
          <el-col :span="16" class="mov-tab" style="margin-top: 20px;margin-bottom: 30px">
            <el-tabs type="border-card" v-model="activeName">
              <el-tab-pane label="喜欢" name="first" style="padding: 20px">
                <div>
                  <p style="line-height: 30px;font-size: 20px;font-weight: bold;border-bottom: 1px solid #e8e4ea ;">我喜欢的电影</p>
                </div>
                <div class="movlist">
                  <div class="movitem" v-for="(item, key) in likeLists" :key="key" @click="intoMovieDetail(item.movieid)">
                    <el-row>
                      <el-col :span="4">
                        <img :src="item.movie.picture" class="image">
                      </el-col>
                      <el-col :span="19" :offset="1">
                        <p>{{ item.movie.moviename }}</p>
                        <p class="content">{{ "上映年份: " + item.movie.showyear }}</p>
                        <p class="content">{{ "导演: " + item.movie.director }}</p>
                        <p class="content">{{ "热度" + item.movie.numrating }}</p>
                        <p class="content">总评分:</p>
                        <el-rate
                          v-model="item.movie.averating"
                          disabled
                          show-score>
                        </el-rate>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="已评价" name="second" style="padding: 20px">
                <div>
                  <p style="line-height: 30px;font-size: 20px;font-weight: bold;border-bottom: 1px solid #f6f2f8 ;">我评价的电影</p>
                </div>

                <div class="movlist">
                  <div class="movitem" v-for="(item, key) in reviewLists" :key="key" @click="intoMovieDetail(item.movieid)">
                    <el-row>
                      <el-col :span="4">
                        <img :src="item.movie.picture" class="image">
                      </el-col>

                      <el-col :span="19" :offset="1">
                        <p>{{ item.movie.moviename }}</p>
                        <p class="content">{{ "上映年份: " + item.movie.showyear }}</p>
                        <p class="content">{{ "导演: " + item.movie.director }}</p>
                        <p class="content">{{ "热度: " + item.movie.numrating }}</p>
                        <p class="content">{{ "评价内容: " + item.content }}</p>
                        <p class="content">个人评分:</p>
                        <el-rate
                          v-model="item.star"
                          disabled
                          show-score>
                        </el-rate>
                        <p class="content">{{ "点评时间: " + item.reviewtime }}</p>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="8" class="mov-reclist" style="margin-top: 20px;margin-bottom: 30px">
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
        </el-col>
      </el-row>

    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form   label-width="80px">
      <el-form-item label="更改密码">
        <el-input type="password" v-model="userpwd"></el-input>
      </el-form-item>
      <el-form-item label="重复更改密码">
        <el-input type="password" v-model="againpwd"></el-input>
      </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="resetPw">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script type="text/javascript">
  import API from '../api'
  export default {
    name: 'movdetail',
    data () {
      return {
        value:3.7,
        activeName:'first',
        loginUser: {},
        dialogVisible: false,
        userpwd:'',
        againpwd: '',
        likeLists: [],
        reviewLists: [],
        movieRecommentList: [],
      }
    },
    mounted() {
      this.loginUser = this.$store.state.user;
      // 请求喜欢与评价接口
      API.profileReviewsApi({
      }).then(res => {
        this.reviewLists = res.review
        // 处理显示数据
        this.reviewLists.forEach(function (ele, index) {
          ele['content'] = ele['content'] == null ? '' : ele['content']
        })
      })
      API.profileCollectsApi({
      }).then(res => {
        this.likeLists = res.rectab
      })
      // 请求推荐电影列表的接口
      API.movieRecommendApi({
      }).then(res => {
        this.movieRecommentList = res.movies
        this.movieRecommentList.forEach(function (ele, index) {
          ele['rating'] = ele['rating'].toFixed(1)
        })
      })
    },
    head () {
      return {
        title: '狗眼看电影',
        meta: [
          {hid: 'description', name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no'}
        ]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      intoMovieDetail (movieid) {
        let path = "/movie/" + movieid;
        this.$router.push({path: path})
      },
      async resetPw() {
          if (this.userpwd == "" || this.userpwd !== this.againpwd) {
              alert("提示：密码不为空且两次输入的密码应一致")
          } else {
            await API.resetpwApi({
              password: this.userpwd,
            }).then(res => {
              if (res.code === undefined) {
                alert("修改密码成功")
                this.dialogVisible = false
              }
            })
          }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



  .perheader {
    background-image: url("../assets/image/user_cover_image.jpg");
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center;
    width: 100%;
    height: 300px;
  }
  .image {
    width: 100%;
    display: block;
  }

  .movitem {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2eef4;
    cursor:pointer;
  }

  .image {
    width: 100%;
    display: block;
  }

  .perimg {
    width: 100%;
  }

  .userimg {
    width: 100%;
  }
  .content {
    margin-top: 5px;
  }
</style>
