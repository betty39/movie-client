<template>
    <div>
        <div class="left-bottom-wrapper clearfix" v-if="showReviews.length > 0">
            <div class="title-wrapper">
                <p class="title">用户评论列表</p>
            </div>

            <!-- 循环生成这个点评盒子 -->
            <div class="list clearfix" v-for="(item,index) in showReviews" :key="index">
                <!--用户头像信息-->
                <div class="user-pic-wrapper">
                    <img class="user-pic" src="~/assets/image/touxiang.png">
                </div>
                <div class="user-comment-wrapper">
                    <!--用户评论内容-->
                    <div class="comment-content">
                        <p class="user-comment">{{ item.content }}</p>
                    </div>
                    <!--用户评星及用户信息-->
                    <div class="comment-list">
                        <div class="star-number">
                            <el-rate
                             v-model="item.star"
                             disabled
                             text-color="#ff9900"
                             score-template="{value}"
                             >
                            </el-rate>
                        </div>

                        <div class="time-wrapper">
                            <p class="time">
                            {{ item.reviewtime }}
                            </p>
                        </div>
                        <div class="user-name">
                          <p class="name">{{ item.username }}</p>
                        </div>
                    </div>
                    <br>
                    <hr style="background-color: #eeeeee; height: 1px; border: none;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import API from '../../api'
export default {
    props: {
      reviewList: Array,
    },
  data() {
    return {
      showReviews: this.reviewList,
    }
  },
  mouted() {
console.log("show review child")
console.log(this.showReviews)
  },
  methods: {
    appendReview(review) {
        let reviews = [
            review
        ]
        this.showReviews = reviews.concat(this.showReviews);
    },
  }
}
</script>

<style scoped>
    .left-bottom-wrapper{
        width: 100%;
    }
    .title-wrapper{
        width: 100%;
        height: 40px;
    }
    .title{
        line-height: 40px;
        font-weight: 600;
        margin-top: 20px;
        font-weight: 500;
    }

    .list{
        width: 100%;
        margin-bottom: 20px;
    }
    .user-pic-wrapper{
        float: left;
        width: 50px;
    }
    .user-pic{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .user-comment-wrapper{
        width: 750px;
    }
    .comment-content{
        padding-bottom: 5px;
    }
    .comment-list{
        height: 20px;
        line-height: 20px;
        font-size: 12px;
    }
    .star-number,
    .time-wrapper,
    .user-name,
    .name {
        float: left;
    }
    .star-number{
        height: 20px;
        width: 135px;
        padding-top: 2px;
    }
    .time-wrapper{
        color: #999;
    }
    .user-name{
        padding-left: 10px;
        width: 240px;
    }
    .show-more:hover .el-icon-arrow-down{
        transform: rotateX(180deg);
    }
</style>
