<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Icon } from '@iconify/vue';
import { useRouter, RouterLink } from 'vue-router';

import { useStore } from '@/store/store';
import DropDown from "@/components/DropDown.vue"

const router = useRouter()
const {formattedRoutes} = storeToRefs(useStore())

formattedRoutes.value.forEach(r => {
    if (r.name && router.hasRoute(r.name))
        return
    router.addRoute(r)
})

console.log(formattedRoutes.value)

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
            <li v-for="route in formattedRoutes">
                <RouterLink v-if="!route.children" :to="route.path" class="hover:text-slate-200">
                    {{ route.name }}
                </RouterLink>
                <DropDown v-else :route="route"/>
            </li>
        </ul>
    </nav>
</template>
