import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../components/Overview.vue'
import Marketplace from '../components/Marketplace.vue'
import Updates from '../components/Updates.vue'
import Portfolio from '../components/Portfolio.vue'
import Certificates from '../components/Certificates.vue'
import Activity from '../components/Activity.vue'
import Finance from '../components/Finance.vue'
import Faq from '../components/FAQ.vue'
import Information from '../components/Information.vue'
import Support from '../components/Support.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: Marketplace
  },
  {
    path: '/updates',
    name: 'Updates',
    component: Updates
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/finance',
    name: 'Finance',
    component: Finance
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
