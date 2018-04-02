import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Home from '../components/Home'
import Famousor from '../components/Famousor'
import User from '../components/User'
import Login from '../components/Login'
import Register from '../components/Register'
import GoodsDetail from '../components/GoodsDetail'
import Recommend from '../components/recommend'
import FamDetail from '../components/FamDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main,
      children: [{path: '', component: Home}, {path: 'famousor', component: Famousor}, {path: 'user', component: User}, {path: 'recommend', component: Recommend}, {path: 'FamDetail', component: FamDetail}]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/goodsDetail',
      component: GoodsDetail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
