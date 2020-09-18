<template>
  <div class="search">


  <van-search
  shape="round"
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />



<van-row>
<van-col span='10'><span>历史记录</span> </van-col>
<van-col span='2' offset="12">
<van-icon name="delete"/>
 </van-col>
</van-row>
<div class="history">
<van-row gutter="20">
<van-col span="12">华世纪湖师大</van-col>
<van-col span="12">散开会啊干脆</van-col>
<van-col span="12">阿部宽财务</van-col>
<van-col span="12">玩了会把未收到</van-col>
<van-col span="12">博会二分法</van-col>
<van-col span="12">阿Novhi二号岁</van-col>
</van-row>

</div>






</div>
</template>

<script> 

import { Toast } from 'vant';


export default {
   name:'Search',
  data () {
    return {
      value: '',
}
     
    },
    methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
  }

</script>

<style scoped>
.search{
    margin:8px;
}

.history{
    margin-top:10px;
}
.history .van-col{
    margin:5px 0px;
}

.search span{
    font-size:16px;
    color:#555;
}



</style>