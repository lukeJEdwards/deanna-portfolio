<script setup lang="ts">
import masonary_wall from '@/components/masonary_wall.vue';

definePage({
    name: 'Aqua libra'
})

const images = import.meta.glob("@/assets/portfolio/Aqua Libra/*.webp")
const array = Object.keys(images).map(value => value)

</script>

<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 parkinsans">Aqua libra</h1>
        <p class="text-sm w-full text-center mt-4 parkinsans mb-16">
            A Fresh Taste of Summertime Fun, with a hint of
            elegance Aqua Libra Entries.
        </p>
        <Suspense>
            <masonary_wall :array="array" />
        </Suspense>
    </div>
</template>
