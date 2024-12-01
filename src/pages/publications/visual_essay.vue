<script setup lang="ts">
import { Icon } from '@iconify/vue';

import masonary_wall from '@/components/masonary_wall.vue';

definePage({
    name: 'Visual essay'
})

const images = import.meta.glob(["@/assets/publications/Visual Essay/*.webp",])
const array = Object.keys(images).map(value => value)
</script>

<template>
    <div>
        <div class="flex flex-col gap-2">
            <h1 class="font-bold text-5xl"> Visual Essay </h1>
            <p class="flex gap-2 items-center text-sm">
                <Icon icon="mdi:map-marker" width="32" height="32" />
                Valentine Park, Ilford, London
            </p>
        </div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 parkinsans mb-16">Cancer Research Cake Sale Fundraiser</h1>
        <Suspense>
            <masonary_wall :array="array" />
        </Suspense>
    </div>
</template>