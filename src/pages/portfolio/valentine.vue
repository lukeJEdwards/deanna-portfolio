<script setup lang="ts">
import masonary_wall from '@/components/masonary_wall.vue';

definePage({
    name: 'The valentine flower trail'
})

const images = import.meta.glob(["@/assets/portfolio/Valentine/*.webp",])
const array = Object.keys(images).map(value => value)
</script>

<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 parkinsans">Valentine’s Park.</h1>
        <p class="text-sm w-full text-center mt-4 parkinsans mb-16">
            The valitine flower tral
        </p>
        <Suspense>
            <masonary_wall :array="array" />
        </Suspense>
    </div>
</template>
