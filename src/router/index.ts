import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home as any,
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active', // active class for non-exact links.
  linkExactActiveClass: 'active', // active class for *exact* links.
});

export default router;
