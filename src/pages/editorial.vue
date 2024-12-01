<script setup lang="ts">
import masonary_wall from '@/components/masonary_wall.vue';

definePage({
    name: 'Editoral'
})


const images = import.meta.glob(["@/assets/Editorial/*.webp"])
const array = Object.keys(images).map(value => value)


</script>

<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 mb-16 parkinsans">Editoral</h1>
        <Suspense>
            <masonary_wall :array="array" />
        </Suspense>
    </div>
</template>