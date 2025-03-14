import { createRouter, createWebHistory} from "vue-router";


const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/index.vue"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/pages/about.vue"),
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
  {
    path: "/:single_page",
    component: () => import("@/pages/[single_page].vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

