<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { useStore } from './store/store';
import navbar from './components/navbar.vue';


const router = useRouter()

const { routes } = useStore();

routes.forEach((r) =>{
  router.addRoute({
    path: `/${r.name}`,
    component: () => import("@/pages/MultiRoute.vue"),
    name: r.name,
  })
}
);

</script>

<template>
  <navbar />
  <RouterView class="flex flex-col flex-grow overflow-y-auto max-h-screen w-5/6 p-4" />
</template>

