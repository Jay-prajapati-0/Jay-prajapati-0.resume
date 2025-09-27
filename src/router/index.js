import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home }
];

const router = createRouter({
  // use BASE_URL when using Vite so history works with base path
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
