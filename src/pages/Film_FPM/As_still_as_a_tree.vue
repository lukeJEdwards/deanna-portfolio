<script setup lang="ts">
import masonary_wall from '@/components/masonary_wall.vue';

definePage({
    name: 'Still as a tree',
})


const images = import.meta.glob("@/assets/Film_FPM/As Still As A Tree/*.webp")
const array = Object.keys(images).map(value => value)

</script>

<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 parkinsans">Graphic’s Director.</h1>
        <h3 class="font-bold text-md w-full text-center mt-4 mb-16 parkinsans">As Still As A Tree, FMP.</h3>
        <Suspense>
            <masonary_wall :array="array" />
        </Suspense>
    </div>
</template>

<style scoped>

</style>