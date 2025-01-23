import { createRouter, createWebHistory} from "vue-router";


const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/categories",
    children: [
      {
        path: "",
        component: () => import("@/pages/categories/index.vue"),
        name: "category",
      },
      {
        path: ":category",
        component: () => import("@/pages/categories/[category].vue"),
      },
    ],
  },
  {
    path: "/projects",
    children: [
      {
        path: "",
        component: () => import("@/pages/projects/index.vue"),
        name: "project",
      },
      {
        path: ":project",
        component: () => import("@/pages/projects/[project].vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

