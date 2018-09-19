<template>
  <div style="margin-top: 20px">
      <el-row>
        <el-col :span="8" :offset="2">
          <div>
            <p style="font-size: 18px;font-weight: bold">{{movtitle}}</p>
            <el-row style="margin-top: 10px">
              <el-col :span="11">
                <img src="../assets/image/login_bkg.png" class="image">
              </el-col>
              <el-col :span="11" :offset="1">
                <p>语言：<span style="font-size: 14px"></span></p>
                <p>类别：<span style="font-size: 14px"></span></p>
                <p>上映日期：<span style="font-size: 14px"></span></p>
                <p>多少人看过：<span style="font-size: 14px"></span></p>
                <p>总评分：<span style="font-size: 14px"></span></p>
                <el-rate
                  v-model="value"
                  disabled
                  show-score>
                </el-rate>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :stretch="true">
            <el-tab-pane label="简介" name="first" style="padding-left: 20px;padding-right: 20px">
              <div>
                <p style="color: #9e6fd7;margin-top: 10px">电影名字</p>
                <p style="margin-top: 10px">导演</p>
                <p style="margin-top: 20px">演员表</p>
                <p style="line-height: 20px">sssssssss</p>
                <p style="margin-top: 20px">故事简介</p>
                <p style="line-height: 20px">sssssssss</p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="相似电影" name="second" style="padding-left: 20px;padding-right: 20px">
              <div>
                <el-row style="border-bottom: 1.5px solid #8c939d ;">
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center;width: 100%">电影名</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center">类型</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center">导演</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center">评分</p></el-col>
                </el-row>
              </div>
              <div>
                <el-row style="border-bottom: 1px solid #8c939d ;">
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center;width: 100%;font-size: 14px;line-height: 30px">电影名</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center;font-size: 14px;line-height: 30px">类型</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center;font-size: 14px;line-height: 30px">导演</p></el-col>
                  <el-col :span="6" style="align-content: center"> <p style="text-align:center;font-size: 14px;line-height: 30px">评分</p></el-col>
                </el-row>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'movdetail',
    data () {
      return {
        movtitle: 'tatanic',
        value:3.7,
        activeName:'first'
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
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



  .image {
    width: 100%;
    display: block;
  }


</style>
