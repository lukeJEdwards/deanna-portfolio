<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router';
import { computed } from 'vue';

import { Icon } from '@iconify/vue';

import nav_dropdown from './nav_dropdown.vue';

const router = useRouter()
const dropdownRoutes = computed(() => router.options.routes.filter(route => route.children))

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
            <li>
                <RouterLink to="/" class="hover:text-slate-200">
                    Home
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/editorial" class="hover:text-slate-200">
                    Editoral
                </RouterLink>
            </li>
            <nav_dropdown v-for="route, i in dropdownRoutes" :key="i" :route="route" />
            <li>
                <RouterLink to="/about" class="hover:text-slate-200">
                    About
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/contact" class="hover:text-slate-200">
                    Contact
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
