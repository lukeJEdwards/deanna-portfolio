<script setup lang="ts">
import masonary_wall from '@/components/masonary_wall.vue';

definePage({
    name: 'Spider the artisist by udide okwanka'
})

const images = import.meta.glob(["@/assets/publications/SPider the artist/*.webp",])
const array = Object.keys(images).map(value => value)
</script>

<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 parkinsans mb-16">My Insight Into The World Of ‘Spider The
            Artist, By Udide Okwanka’.</h1>
        <Suspense>
            <masonary_wall :array="array" />
        </Suspense>
    </div>
</template>
