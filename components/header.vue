<template>
  <div class="common-header">
    <el-row type="flex" justify="space-between">
      <el-col :span="2">
        <div class="logo">
          <p class="logo-text">电影推荐</p>
          <router-link class="logo-text"
                       to="/movie/lists"
                       key="选片"
          >选片</router-link>
        </div>
      </el-col>

      <el-col :span="7" class="header-right">
        <!--导航搜索-->
        <div class="nav-search-wrapper" name="el-fade-in">
          <i class="el-icon-search" @mouseenter="show = true"></i>
          <transition name="el-fade-in-linear">
            <nav-search
              v-show="show"
            ></nav-search>
          </transition>
        </div>
        <!-- 用户未登录时显示 的登录注册样式-->
        <div v-if="!token" class="unlogin">
          <router-link class="unlogin-handle"
                       to="/user/login"
                       key="登录"
          >登录</router-link>
          <router-link class="unlogin-handle"
                       to="/user/register"
                       key="注册"
          >注册</router-link>
        </div>

        <!-- 登录后显示的昵称的部分 -->
        <div v-else class="user-handle">
          <router-link class="unlogin-handle"
                       to="/user/profile"
                       :key="loginUser.username"
          >{{loginUser.username}}</router-link>
          <el-button @click="logout">退出</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import NavSearch from '~/components/search.vue'

  export default {
    data() {
      return {
          show: false,
        loginUser:        {},
        token:        '',
      }
    },
    mounted() {
      this.loginUser = this.$store.state.auth.user;
      this.token     = this.$store.state.auth.token;
    },
    methods: {
      logout: function() {
        // 退出登录
      },
    },
    components: {
      "nav-search": NavSearch
    }
  }
</script>

<style scoped>
  .common-header{
    position: relative;
    height: 55px;
    background-color: #af7bef;
    min-width: 1160px;
  }
  .logo{
    position: absolute;
    top: 5px;
    left: 10px;
    height: 20px;
  }
  .el-row{
    height: 30px;
  }
  .el-col{
    height: 30px;
  }
  /*未登录时状态*/
  .unlogin{
    position: absolute;
    right: 60px;
    height: 30px;
    margin-top: -22px;
  }
  .unlogin-handle{
    display: inline-block;
    padding: 0 10px;
    color: #fefefe;
    font-size: 20px;
    text-decoration: none;
  }
  .user-handle{
    float: right;
  }
  .language-wrapper{
    width: 100px;
    float: right;
  }
  .language-wrapper >>>.el-input__inner {
    color: #fefefe;
  }
  .user-pic{
    position: absolute;
    top: 1px;
    left: -33px;
    width:28px;
    height: 28px;
    border-radius: 50%;
    line-height: 30px;
  }
  .logo-text{
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    margin-left: 40px;
    color: #fff;
    height: 30px;
    width: 90px;
    line-height: 30px;
    margin-top: 10px;
    text-decoration: none;
  }
  .el-icon-search{
    margin-top: 9px;
    color: #fff;
  }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
    z-index: 100;
    position: absolute;
  }
  .search-input{
    font-size: 13px;
    position: absolute;
    z-index: 100;
    border: 1px solid #fff;
    width: 220px;
    height: 28px;
    background-color: #fff;
    margin-left: -460%;
    margin-top: -24px;
  }
  .nav-search-wrapper{
    position: relative;
    display: inline-block;
    right: -40%;
    margin-top: 10px;
  }
  .message-icon{
    height: 30px;
    line-height: 30px;
    margin-top: -26px;
  }
  .notify-num{
    width: 15px;
    height: 15px;
    background-color: red;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    margin-top: -43px;
    margin-left: 10px;
    line-height: 15px;
    font-size: 12px;
  }
  .notify-list-user{
    display: inline-block;
    float: left;
    margin-right: 8px;
  }
  .notify-express{
    display: inline-block;
    float: left;
    margin-right: 8px;
  }
  .notify-question-name{
    color: #3DA8F5;
    display: inline-block;
    float: left;
  }
</style>
