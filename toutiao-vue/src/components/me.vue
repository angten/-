<template>
  <div class="user">


<van-row>
  <van-col span="4">
      <img src="../assets/xi.jpg">
  </van-col>
  <van-col span="10" offset="4">
      用户名
  </van-col>
</van-row>

<van-grid :borden="false":column-num="3">
  <van-grid-item icon="star-o" text="收藏" />
  <van-grid-item icon="clock-o" text="浏览历史" />
  <van-grid-item icon="volume-o" text="消息" />
  <van-grid-item icon="comment-o" text="评论" />
  <van-grid-item icon="good-job-o" text="点赞" />
  <van-grid-item icon="gift-card-o" text="广告" />
</van-grid>







</div>
</template>

<script> 



export default {
   name:'me',
  data () {
    return {
     
}
     
    }
  }

</script>

<style scoped>

.user{
    margin: 8px;
}
.user img{
    width: 80px;
    height: 80px;
    border-radius: 50%;

}

.van-icon{
  color:red;
}
</style>