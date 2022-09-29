import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/delete-1',
      component: () => import('./button/delete-1.vue'),
      name: 'deleteV1'
    }
  ]
})

export default router
