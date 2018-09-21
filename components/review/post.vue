<template>
    <div class="user-post-wrapper clearfix">
        <el-dialog title="发布评论" :visible.sync="showDialog">
            <el-form ref="form" :model="form" label-position="top" label-width="80px">
                <el-form-item label="评星">
                    <el-col :span="5">
                        <el-rate v-model="form.stars"></el-rate>
                    </el-col>
                    <el-col :span="5">
                        <p class="choose-stars"> 打分 </p>
                    </el-col>
                </el-form-item>

                <el-form-item>
                    <el-col :span="17">
                        <el-form-item>
                            <el-input type="textarea" v-model="form.desc" placeholder="请输入评价内容"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.native="onSubmit">提交评论</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
  import API from '~/api'

export default {
  props: {
    movieInfo: Array,
  },
    data() {
        return {
            showDialog: false,
            form: {
                stars:    null,
                desc:     '',
            }
        }
    },
    methods: {
        async onSubmit() {
          if (this.form.star == null && this.form.desc == '') {
              alert("请评星或输入评论后再提交")
          } else {
            await API.submitReviewApi({
              movieid: this.movieInfo[0].movieid,
              content: this.form.desc,
              star: this.form.stars == null ? 0 : this.form.stars,
            }).then(res => {
              if (res.code === undefined) {
                // 获取当前时间
                var date = new Date();
                var seperator1 = "-";
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                  month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                  strDate = "0" + strDate;
                }
                var currentdate = year + seperator1 + month + seperator1 + strDate;

                  let review = {
                    star: this.form.stars,
                    reviewtime: currentdate,
                    content: this.form.desc,
                    username: this.$store.state.user.username,
                  }
                alert("发表成功")
                this.showDialog = false
                // 将点评追加一条记录
                this.$emit('refreshReview', review);

              }
            })
          }
        },
      changeShow(showReview){
        this.showDialog = showReview
      }
    }
}
</script>

<style scoped>
    .user-post-wrapper{
        width: 100%;
        height: 300px;
    }
    .guide-to-post{
        width: 100%;
        text-align: center;
    }
    .star-number{
        padding-left: 20px;
        height: 56px;
        width: 150px;
    }
    .choose-stars{
        height: 20px;
        line-height: 1.5;
        color: #F7BA2A;
        font-size: 12px;
    }
    .currency-text{
        width: 103px;
   }
   .el-button--primary{
       margin-top: 20px;
   }
   .star-traffic-mode{
       width: 216px;
   }
   .submit-btn{
       width: 70px;
       height: 35px;
       background-color: #f5802d;
       color: #fff;
       margin-top: 30px
   }
</style>
