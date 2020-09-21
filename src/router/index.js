import Vue from 'vue'
import Router from 'vue-router'

 const home =() =>import("../components/home")
 const about=() =>import('../components/about')
 const homelove=() =>import('../components/homelove')
 const homemessage=() =>import('../components/homemessage')

Vue.use(Router)

const routes=[
  {
    path:'/home',
    component:home,
    children:[
      {
        path:'',
        redirect:'love'
      },
      {
        path:'love',
        component:homelove
      },

      {
       path:'message',
       component:homemessage
      }
    ]
     
  },
  {
    path:'/about',
    component:about
  }

]





export default new Router({
  routes,
  mode:"history"
})
