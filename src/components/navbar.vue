<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';

import { useStore } from '@/store/store';
import { storeToRefs } from 'pinia';

const { routes } = storeToRefs(useStore())


const router = useRouter()


routes.value.forEach(r => router.addRoute(
    {
        path: `/${r.name == "Home" ? ' ' : r.name}`,
        component: () => import("@/pages/MultiRoute.vue"),
        name: r.name
    }
))

</script>

<template>
    <nav class="flex flex-col p-8 w-1/6 bg-[#967D69] text-white max-h-screen gap-4">
        <div class="flex w-full gap-4 justify-center">
            <a href="https://www.instagram.com/my_crazycreations_/" target="_blank">
                <Icon icon="mdi:instagram" width="24" height="24" />
            </a>
            <a href="https://www.youtube.com/@DeannaWiggs" target="_blank">
                <Icon icon="mdi:youtube" width="24" height="24" />
            </a>
        </div>
        <ul class="flex flex-col gap-8">
            <li v-for="route in routes">
                <RouterLink :to="`/${route.name}`" class="hover:text-slate-200">
                    {{ route.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
