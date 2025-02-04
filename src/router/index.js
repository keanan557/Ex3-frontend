import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddNewProducts from "../views/AddNewProducts.vue"
import editProducts from '@/views/editProducts.vue'
import deleteProducts from '@/views/deleteProducts.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/insertNewProducts',
    name: 'insertNewProducts',
    component: AddNewProducts
  },
  {
    path: '/deleteProducts',
    name: 'deleteProducts',
    component: deleteProducts
  },
  {
    path: '/editProducts',
    name: 'editProducts',
    component: editProducts
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
