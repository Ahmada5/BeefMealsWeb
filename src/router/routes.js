import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Itemdetail from '../pages/Detailbeef.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/Detailbeef/:id', component: Itemdetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
