import Vue from 'vue'
import Router from 'vue-router'

 const home =() =>import("../components/home")
 const about=() =>import('../components/about')
 const homelove=() =>import('../components/homelove')
 const homemessage=() =>import('../components/homemessage')
 const profile=()=>import('../components/profile')
 const user=()=>import('../components/user')

Vue.use(Router)

const routes=[
  {
        path:'/',
        redirect:'/home'
      },
      {
    path:'/home',
    component:home,
    meta:{
      title:"首页"
    },
    children:[
      
     
      {
        path:'love',
        meta:{
          title:"首页-love"
        },
        component:homelove
      },

      {
       path:'message',
       meta:{
        title:"首页-message"
      },
       component:homemessage
      }
    ]
     
  },
  {
    path:'/about',
    meta:{
      title:"关于"
    },
    component:about
  },
  {
    path:'/profile',
    meta:{
      title:"档案"
    },
    component:profile

  },
  {
    path:'/user/:id',
    meta:{
      title:"用户"
    },
    component:user
  }

]


const router=new Router({
  routes,
  mode:"history"
})
//  前置守卫（guard）   前置钩子(hook)
router.beforeEach((to,from,next)=>{
  document.title=to.meta.title
    //  document.title=to.matched[0].meta.title  //关于 children组件的 网页title的 显示  是 父组件还是 children组件自己的
  console.log(to)
  next();
})
//后置守卫      后置钩子
router.afterEach((to,from)=>{

})



 
export default router
