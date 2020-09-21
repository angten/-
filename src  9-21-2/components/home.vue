<template>
  <div>
    <p>我是home的组件内容</p>
    <router-link to="/home/love">homlove</router-link>
    <router-link to="/home/message">homemessage</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
     
    }
  }
}
</script>


<style scoped>

</style>
