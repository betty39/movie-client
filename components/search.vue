<template>
    <div>
        <el-select
            v-model="value9"
            filterable clearable remote
            reserve-keyword
            class="el-select-content"
            placeholder="请输入电影名称进行搜索"
            :remote-method="searchRemoteInfo"
            :loading="loading"
            @change="changeSelect"
        >
            <el-option v-for="item in searchInfos" :key="item.movieid" :label="item.moviename" :value="item.movieid">
                <span style="float: left; color: #444">{{ item.moviename }}</span>
                <span style="float: left; color: #8492a6; font-size: 13px">&nbsp;{{ item.director }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px; margin-left:15px;">{{ item.averating }}</span>
            </el-option>
        </el-select>
    </div>
</template>

<script>
  import API from '../api'

export default {
    data() {
        return {
            loading:       false,
            value9:        [],
          timeout: null,
            searchInfos: [],
        }
    },
    mounted() {

    },
    methods: {
        changeSelect(item) {
          let path = "/movie/" + item;
          this.$router.push({path: path})
        },
        async searchRemoteInfo(query) {
          let data = {
            moviename: query
          }
            // 远程搜素
          if (query !== '') {

            this.loading = true;
            API.movsearchApi(data).then(res => {
              this.loading = false;
              this.searchInfos = res.movies

              clearTimeout(this.timeout)
              this.timeout = setTimeout(() => {

              }, 3000 * Math.random())

            }).catch(msg => {
              this.loading = false;
              this.searchInfos = []
            })
          } else {
            this.searchInfos = [];
          }
        }
    }
}
</script>

<style scoped>
.el-select{
      height: 30px;
      line-height: 30px;
      cursor: text;
      background-color: #fff;
      z-index: 100;
      display: inline-block;
      margin-top: -25px;
      margin-left: -1300%;
      position: absolute;
      border:1px solid #eee;
  }
 .el-input__inner{
      color: #3d464d;
      height: 30px;
      width: 200px;
     }
 .el-select-dropdown{
      min-width: 31% !important;
     }
.el-select-dropdown__item:after{
    display: none;
     }
</style>
