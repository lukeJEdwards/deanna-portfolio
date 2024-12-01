<script setup lang="ts">
import masonary_wall from '@/components/masonary_wall.vue';
definePage({
    name: 'The matriarchy'
})

const images = import.meta.glob("@/assets/Film_FPM/The Matriarchy/*.webp")
const array = Object.keys(images).map(value => value)
</script>

<template>
    <div>
        <div>
            <p>
                Film Poster: Created for Peter Finn for a Y3 FMP
            </p>
            <p>
                <a href="" target="_blank">
                Instagram: @PeterFinn
                </a>
            </p>
        </div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 mb-16 parkinsans">The matriarchy</h1>
        <Suspense>
            <masonary_wall :array="array" />
        </Suspense>
    </div>
</template>
