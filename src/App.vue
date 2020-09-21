<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>主页</router-link>
    <router-link to="/about" tag="button" replace>内容</router-link>
    <router-link :to="{path:'/profile',query:{name:'wukong',age:'47',height:'12'}}" tag="button" replace>档案</router-link>
    <router-link :to="'/user/'+id" tag="button" replace>用户</router-link>
  
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
 data(){
   return{
     id:'123'
   }
 }
  
 
}
</script>

<style>
#app {
}
</style>
