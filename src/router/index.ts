import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/kaijo',
      name: 'kaijo',
      component: () => import('../views/KaijoView.vue')
    },
    {
      path: '/bubble',
      name: 'bubble',
      component: () => import('../views/BubbleView.vue')
    },
    {
      path: '/comingsoon',
      name: 'comingsoon',
      component: () => import('../views/ComingSoon.vue')
    },
    {
      path: '/euclid',
      name: 'euclid',
      component: () => import('../views/EuclidView.vue')
    }
  ]
})

export default router
