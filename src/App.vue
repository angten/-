<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>主页</router-link>
    <router-link to="/about" tag="button" replace>内容</router-link>
  
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
}
</style>
