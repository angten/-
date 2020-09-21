<template>
  <div>
    <p>我是userid的组件内容</p>
    <h2>{{$route.params.id}}</h2>
     
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
     
    }
  }
}
</script>


<style scoped>

</style>
