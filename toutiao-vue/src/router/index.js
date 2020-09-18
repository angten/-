import Vue from 'vue'
import Router from 'vue-router'
import one1 from '@/components/one1'
import two1 from '@/components/two1'
import three1 from '@/components/three1'
import me from '@/components/me'
import Search from '@/components/Search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',redirect:"/one1"
    },
    {path:'/one1',name:'one1',component:one1},
    {path:'/two1',name:'two1',component:two1},
    {path:'/three1',name:'three1',component:three1},
    {path:'/me',name:'me1',component:me},
    {path:'/Search',name:'Search',component:Search}
  ]
})
