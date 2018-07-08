import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import usersList from '@/components/usersList'
import CreateUser from '@/components/CreateUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        guest: true,
        needsAuth: false
      }
    },
    {
      path: '/users-list',
      name: 'usersList',
      component: usersList,
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/create-user',
      name: 'createUser',
      component: CreateUser,
      meta: {
        needsAuth: true
      }
    }
  ]
})
