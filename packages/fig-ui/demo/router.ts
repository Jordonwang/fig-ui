import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/delete',
      component: () => import('./button/delete.vue'),
      name: 'TableCustomColumns'
    }
  ]
})

export default router
