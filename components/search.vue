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
            <el-option v-for="item in searchInfos" :key="item.value" :label="item.label" :value="item">
                <span style="float: left; color: #444">{{ item.value }}</span>
                <span style="float: left; color: #8492a6; font-size: 13px">&nbsp;{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px; margin-left:15px;">{{ item.text }}</span>
            </el-option>
        </el-select>
    </div>
</template>

<script>

export default {
    data() {
        return {
            loading:       false,
            value9:        [],
            searchInfos: [{
                                     value: '选项1',
                                     label: '黄金糕',
                                     href: '/movie/detail',
                                   }, {
                                     value: '选项2',
                                     label: '双皮奶',
                                      href: '/movie/detail',
                                   }, {
                                     value: '选项3',
                                     label: '蚵仔煎',
                                      href: '/movie/detail',
                                   }, {
                                     value: '选项4',
                                     label: '龙须面',
                                      href: '/movie/detail',
                                   }, {
                                     value: '选项5',
                                     label: '北京烤鸭',
                                      href: '/movie/detail',
                                   }],
        }
    },
    mounted() {

    },
    methods: {
        changeSelect(item) {
            this.$router.push({
                path: item.href
            })
        },
        async searchRemoteInfo(query) {
            // 远程搜素
        },
    }
}
</script>

<style scoped>
  >>>.el-select{
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
  >>>.el-input__inner{
      color: #3d464d;
      height: 30px;
      width: 200px;
     }
  >>>.el-select-dropdown{
      min-width: 31% !important;
     }
  >>>.el-select-dropdown__item:after{
    display: none;
     }
</style>
