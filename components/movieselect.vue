<template>
  <div style="margin-top: 20px">
    <el-col :span="12" :offset="2">
      <el-col :span="24" :offset="2">
    <div class="cheklist">
      <div style="margin: 15px 0;"></div>
      <el-radio-group v-model="checkedCities" @change="handleCheckedCitiesChange" >
        <el-radio v-for="city in cities" :label="city" :key="city">{{city}}</el-radio>
      </el-radio-group>
    </div>
      </el-col>

    <div class="movcard-list">
      <el-row>
        <el-col :span="6" v-for="(o, index) in 4" :key="index" :offset="2">
          <el-card :body-style="{ padding: '0px' }" style="margin-top: 10px">
            <img src="../assets/image/login_bkg.png" class="image">
            <div style="padding: 10px;">
              <p style="font-size: 16px">好吃的汉堡 <span style="color: #9e6fd7">4.7</span></p>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    </el-col>
  </div>
</template>
<script type="text/javascript">
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    name: 'Login',
    data () {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        currentDate: new Date()
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
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
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
    width: 100%;
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
