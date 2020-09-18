<template>
  
<div>
  <van-nav-bar title="香味园" left-text="返回" left-arrow>
  <template #right>
   <router-link to="/Search"><van-icon name="search" size="18"  /></router-link>

  </template>
</van-nav-bar>



   <van-swipe :autoplay="3000" height="250">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>




<van-swipe-cell>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    class="goods-card"
    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
  />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>



</div>

  
</template>

<script> 

import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);


export default {
   name:'jiqi',
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
     
}
     
    }
  }

</script>

<style scoped>




this.images{
  width:200px;
  height:250px;
}

 .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }



.van-nav-bar{
  background-color: brown;
}

.van-nav-bar__title,.van-nav-bar .van-icon{
  color:#ffffff;
}
</style>
