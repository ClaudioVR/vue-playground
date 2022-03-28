import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('../views/MoreIdeas.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/CardSearch.vue'),
  },

  {
    path: '/doc-creator',
    name: 'docCreator',
    component: () => import('../views/DocumentCreator.vue'),
  },
  {
    path: '/osdashboard',
    name: 'osdashboard',
    component: () => import('../views/OsDashboard.vue'),
  },
  {
    path: '/flexbox',
    name: 'flexbox',
    component: () => import('../views/Flexbox.vue'),
  },
  {
    path: '/dragdrop',
    name: 'dragdrop',
    component: () => import('../views/DragDrop.vue'),
  },
  {
    path: '/signature',
    name: 'signature',
    component: () => import('../views/Signature.vue'),
  },
  {
    path: '/draggrid',
    name: 'draggrid',
    component: () => import('../views/DragGrid.vue'),
  },
  {
    path: '/infinite',
    name: 'infinite',
    component: () => import('../views/InfiniteScroll.vue'),
  },
  {
    path: '/typeform',
    name: 'typeform',
    component: () => import('../views/Typeform.vue'),
  },
  {
    path: '/application',
    name: 'application',
    component: () => import('../views/TenancyApplication.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
