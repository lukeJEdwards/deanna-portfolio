import { createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path:'/',
    component: () => import('@/pages/index.vue'),
    name:'Home'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
});

