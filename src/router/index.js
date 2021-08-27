import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
 
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/teller',
    name: 'teller',
    component: () => import('../components/Teller.vue')
  },
  {
    path: '/transactional_security',
    name: 'transactional_security',
    component: () => import('../components/TransactionalSecurity.vue')
  },
  {
    path: '/trade_finance',
    name: 'trade_finance',
    component: () => import('../components/Trade_Finance.vue')
  },
  {
    path: '/select_user',
    name: 'select_user',
    component: () => import('../components/Select_User.vue')
  },
  {
    path: '/autherize_voucher',
    name: 'autherize_voucher',
    component: () => import('../components/Autherize_Voucher.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
