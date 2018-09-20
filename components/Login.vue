<template>
  <div class="loginWrapper">
    <div class="back-ground">
      <img src="../assets/image/login_bkg.png">
    </div>
    <div class="bd">
      <el-form :model="loginForm" :rules="loginRule" ref="loginForm" :label-position="labelPosition">
        <el-form-item  prop="userName" class="login-item">
          <el-input type="userName" v-model="username" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item  v-if="showEmail" prop="againPw">
          <el-input v-model="againPw" placeholder="重复密码" type="password"></el-input>
        </el-form-item>
        <el-form-item  v-if="showEmail" prop="email">
          <el-input v-model="email" placeholder="邮箱" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" class="submitBtn" round >{{ showText }}</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script type="text/javascript">
  import API from '../api'

  export default {
    name: 'Login',
    props: {
      type: String,
    },
    data () {
      return {
        showText: this.type=="login" ? "登录" : this.type =="register" ? "注册" : "重置密码",
        showEmail: this.type == "register" ? true : false,
        loadingLogin: false,
        labelPosition: 'right',
        username: this.type == "reset" ? this.$store.state.auth.user.username : "",
        password: "",
        email: "",
        againPw: "",
        loginForm: {
          userName: '',
          pwd: ''
        },
        loginRule: {
          userName: [
            // { required: true, message: '请输入昵称', trigger: 'blur' }
            // { min: 3, max: 10, message: '长度在 3 到 16 个字符', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
          ]
        }

      }
    },
    head () {
      return {
        title: 'movie recommend',
        meta: [
          {hid: 'description', name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no'}
        ]
      }
    },
    methods: {
      async submitForm () {
          // 登录
          if (this.type == "login") {
            let result = await this.$store.dispatch('login', {
              username: this.username,
              password: this.password
            })
            if (result == undefined) {
              this.$router.push({path: `/`})
            }
          } else if (this.type == "register"){
              if (this.username == "" || this.password == "" || this.password !== this.againPw) {
                  alert("请验证昵称不为空且两次输入的密码一致")
              } else {
                await API.registerApi({
                  username: this.username,
                  password: this.password,
                  email: this.email,
                }).then(res => {
                  if (res.code === undefined) {
                    alert("注册成功")
                    this.$router.push({path: `/user/login`})
                  }
                })
              }
          }

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .back-ground{
    position: absolute;
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
    width: 20%;
    margin-left: 40%;
    margin-top: 18rem;
  }
  .submitBtn{
    width: 100%;
  }

  .login-icon {
    top: 10%;
    width: 40%;
    margin-left: 30%;
    position: absolute;
  }
  .login-title {
    position: absolute;
    top: 37%;
    width: 40%;
    text-align: center;
    margin-left: 30%;
  }
  .login-title p {
    color: #00a0e9;
    font-face: "微软雅黑";
    font-weight: bold;
    font-size: 1.5rem;
  }
  .login-icon img {
    width: 100%;
  }
  .beian {
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
  }

  .beian p {
    width: 100%;
    text-align: center;
  }

</style>
