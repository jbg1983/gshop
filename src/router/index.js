import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '../page/Home/Home'
import Order from '../page/Order/Order'
import Profile from '../page/Profile/Profile'
import Search from '../page/Search/Search'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/order',component:Order},
    {path:'/profile',component:Profile},
    {path:'/search',component:Search},
  ]
})
