import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '../views/HelloView.vue'
import DiceThrowView from '../views/DiceThrowView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloView
    },
    {
      path: '/diceThrow',
      name: 'diceThrow',
      component: DiceThrowView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
