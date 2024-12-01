<script setup lang="ts">
import masonary_wall from '@/components/masonary_wall.vue';

definePage({
    name: 'Personal'
})


const images = import.meta.glob([
    "@/assets/portfolio/Personal/*.gif",
    "@/assets/portfolio/Personal/*.webp",
])
const array = Object.keys(images).map(value => value)

</script>

<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 parkinsans mb-16">Personal</h1>
        <Suspense>
            <masonary_wall :array="array" />
        </Suspense>
    </div>
</template>