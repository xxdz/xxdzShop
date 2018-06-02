import Vue from 'vue'
import Router from 'vue-router'
import navigation from '@/components/navigation'
import show from '@/components/show'
import showArea from '@/components/showArea'
import login from '@/components/login'
import user from '@/components/user'
import shop from '@/components/shop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name : 'navigation',
      components : {
        default : navigation,
        show : show,
      },
      children : [{
        path : '',
        components : {
          default : showArea,
          showArea,
        }
      }]
    },{
      path : '/login',
      name : 'login',
      component : login
    },{
      path : '/user',
      name : 'user',
      component :user
    },{
      path : '/shop',
      name : 'shop',
      component : shop
    },
    {
      path : '/',
      name : 'show',
      component : show,
    }
  ]
})
