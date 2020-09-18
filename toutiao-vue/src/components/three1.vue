<template>
  <div>

<van-tabs>
  <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
  </van-tab>
</van-tabs>

  <div class="photo-item">

  <p class="photo-title">
  标题
  </p>

<van-row gutter="15">
<van-col span="8">
<img src="../assets/purple.jpg">
</van-col>

<van-col span="8">
<img src="../assets/cmyk图片.jpg">
</van-col>

<van-col span="8">
<img src="../assets/live.jpg">
</van-col>

</van-row>



<p class="time" >发表时间</p>



  </div>




</div>
</template>

<script> 



export default {
   name:'three1',
  data () {
    return {
     
}
     
    }
  }

</script>

<style scoped>

.photo-item{
  margin:8px;
}

.photo-item img{
  width:100%;
  height:100px
}

.photo-item .time{
  font-size:14px;
}
</style>