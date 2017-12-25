import Vue from 'vue'
import Router from 'vue-router'
import register from '@/view/register'
import userLogin from '@/view/userLogin'
import refer from '@/view/refer'
import layOut from '@/view/layout'
import Added from '@/view/Added'
import recompose from '@/view/recompose'
import look from '@/view/look'
import checkMail from '@/view/checkMail'
import resetPassword from '@/view/resetPassword'
import modify from '@/view/modify'
import manage from '@/view/manage'
import tpl from '@/view/tpl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '/userLogin',
      name: 'userLogin',
      component: userLogin
    },
    {
      path: '/tpl',
      name: 'tpl',
      component: tpl
    },
    {
      path: '/vue',
      name: 'layOut',
      component: layOut,
      children: [
        {
          path: '/',
          name: 'refer',
          component: refer
        },
        {
          path: 'Added',
          name: 'Added',
          component: Added
        },
        {
          path: 'recompose',
          name: 'recompose',
          component: recompose
        },
        {
          path: 'look',
          name: 'look',
          component: look
        },
        {
          path: 'checkMail',
          name: 'checkMail',
          component: checkMail
        },
        {
          path: 'resetPassword',
          name: 'resetPassword',
          component: resetPassword
        },
        {
          path: 'modify',
          name: 'modify',
          component: modify
        },
        {
          path: 'manage',
          name: 'manage',
          component: manage
        }
      ]
    }
  ]
})
