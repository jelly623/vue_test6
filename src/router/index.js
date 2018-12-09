import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import testvue from '@/components/testvue'
import home from '@/components/home'
import firstpart from '@/components/home_components/firstpart'
import secondpart from '@/components/home_components/secondpart'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testvue',
      name: 'testvue',
      component: testvue
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: 'firstpart',
          component: firstpart
        },
        {
          path: '/home/secondpart',
          name: 'secondpart',
          component: secondpart
        }
      ]
    }
    ]
    })

