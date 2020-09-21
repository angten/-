import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

//1.通过vue.sue（插件），安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象

const routes=[
    {path:'',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/about',component:About},
    {path:'/user/:userid',component:User}

]
const router=new VueRouter({
    routes,
    mode:'history',
    linkActiveClass:'active'
})

//3.将router对象传入Vue实例中
export default router     //导出