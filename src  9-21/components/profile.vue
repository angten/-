<template>
  <div>
    <p>我是profile的组件内容</p>
     <p>{{$route.query.name}}</p>
      <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
     
    }
  }
}
</script>


<style scoped>

</style>
