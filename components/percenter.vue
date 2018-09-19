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
                        <p style="line-height: 30px;font-size: 20px;font-weight: bold">{{username}}</p>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="11" style=";margin-top: 315px">
                    <el-button type="primary" style="float: right" plain @click="dialogVisible = true">编辑个人资料</el-button>
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
                  <div class="movitem">
                    <el-row>
                      <el-col :span="4">
                        <img src="../assets/image/login_bkg.png" class="image">
                      </el-col>

                      <el-col :span="19" :offset="1">
                        <p>{{movtitle}}</p>
                        <p>上映年份</p>
                        <p style="margin-top: 10px">导演</p>
                        <p style="margin-top: 10px">3.9<span>(6637人评价)</span></p>
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
                  <div class="movitem">
                    <el-row>
                      <el-col :span="4">
                        <img src="../assets/image/login_bkg.png" class="image">
                      </el-col>

                      <el-col :span="19" :offset="1">
                        <p>{{movtitle}}</p>
                        <p>上映年份</p>
                        <p style="margin-top: 10px">导演</p>
                        <p style="margin-top: 10px">3.9<span>(6637人评价)</span></p>
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

              <div v-for="o in 4" :key="o">
                <el-row style="border-bottom: 1px solid #f6f2f8 ;">
                  <el-col :span="18">
                    <p style="line-height: 40px">{{'列表内容 ' + o }}</p>
                  </el-col>
                  <el-col :span="6">
                    <p style="text-align: right;line-height: 40px">4.4分</p>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
        </el-col>
      </el-row>

    <el-dialog
      title="修改用户信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form   label-width="80px">
      <el-form-item label="电子邮箱">
        <el-input v-model="usermail"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="userpwd"></el-input>
      </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'movdetail',
    data () {
      return {
        movtitle: 'tatanic',
        value:3.7,
        activeName:'first',
        username:'shiwen',
        dialogVisible: false,
        usermail:'',
        userpwd:''
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
</style>
