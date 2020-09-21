<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户的界面</p>
     <!-- <h2> {{Userid}}</h2> -->
     <h2>{{$route.params.userid}}</h2>
  </div>
</template>

<script>
export default{
  name:'User',


  computed:{

Userid(){
    return this.$route.params.userid
}
  }
}

</script>

<style>


</style>
