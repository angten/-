<template>
  <div>

  <van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>


  <van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>


</div>


  
</template>

<script> 



export default {
   name:'haji',
  data () {
    return {
     
}
     
    }
  }

</script>

<style scoped>

.van-nav-bar{
  background-color: brown;
}

.van-nav-bar__title,.van-nav-bar .van-icon{
  color:#ffffff;
}
</style>