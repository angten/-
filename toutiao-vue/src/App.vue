<template>
  <div id="app">


<router-view></router-view>

<van-tabbar v-model="active" active-color="purple" route>
  <van-tabbar-item icon="home-o" to="/one1"> 主页   </van-tabbar-item>       
     <van-tabbar-item icon="video-o" to="/two1">   视频       </van-tabbar-item>   
       <van-tabbar-item icon="chat-o" to="/three1">论坛    </van-tabbar-item> 
      <van-tabbar-item icon="contact" to="/me"> 我的  </van-tabbar-item> 
</van-tabbar>




  

  </div>
</template>

<script>
export default {
  name:'App',
   data() {
    return {
      active: 0,
    };
  },
}
</script>



<style>

</style>
