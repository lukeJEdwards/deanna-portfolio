<script setup lang="ts">
import { storeToRefs } from 'pinia';


import { useStore } from '@/store/store';
import { useImageBuilder } from "@/composables/useImageBuilder"

const { home } = storeToRefs(useStore())
</script>

<template>
    <div v-if="home.project_assets">
        <h1 class="font-bold text-2xl w-full text-center mt-4 mb-16 parkinsans">Deanna Wiggs Illustration</h1>
        <div class="grid grid-rows-1 grid-cols-3 gap-x-4 w-full pb-0">
            <img :src="useImageBuilder(home.project_assets[0], 750)" class="w-full" />
            <div class="flex flex-col gap-8">
                <img :src="useImageBuilder(home.project_assets[1], 750)" class="w-full" />
                <img :src="useImageBuilder(home.project_assets[2], 750)" class="w-full" />
            </div>
            <img :src="useImageBuilder(home.project_assets[3], 750)" class="w-full" />
        </div>
        <div class="pb-16">
            <p class="font-light text-xs">Illustrator</p>
            <p class="font-light text-xs">Content Creator</p>
            <p class="font-light text-xs">Art Director</p>
        </div>
        <div class="grid grid-rows-1 grid-cols-2 gap-x-32 w-full">
            <img :src="useImageBuilder(home.project_assets[4], 750)" />
            <div class="relative">
                <img :src="useImageBuilder(home.project_assets[5], 750)"
                    class="absolute z-10 w-[250px] rounded-full top-[-125px] left-[-125px]" />
                <img :src="useImageBuilder(home.project_assets[6], 750)" class="w-full" />
            </div>
        </div>
    </div>
</template>
