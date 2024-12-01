<script setup lang="ts">
import masonary_wall from '@/components/masonary_wall.vue';

definePage({
    name: 'Hurricane (BHS)'
})

const images = import.meta.glob([
    "@/assets/portfolio/Hurricane BTS/*.webp",
    "@/assets/portfolio/Hurricane BTS/Hurricane GIFS/*.gif"
])
const array = Object.keys(images).map(value => value)
</script>

<template>
    <div class="flex flex-col">
        <h1 class="font-bold text-2xl w-full text-center mt-4 parkinsans mb-16">
            Hurricane (Music Video) Collaboration. PROCESS
        </h1>
        <div class="w-3/5 self-center p-4 border-l-4 border-[#C07F53] bg-[#967D694D] mb-16">
            <p class="mb-4">
                Harry Sheehan, Saranya, and I collaborated to make 'Hurricane' as an animated music video. This Music
                video
                is inspired by the lyrics' Whirlpools, on my brain, making me feel like I'm going insane, hey it's okay,
                wash the pain away', my depiction of the complexities of emotions experienced when realising you've
                begun to
                develop a crush. The immersive, projected animations intend to immerse the audience into this
                experience,
                connecting them to the emotional grasp of overwhelming yet fragile human emotion. The excellent Harry
                Sheehan brought this clip to life with his trained camera skills alongside the wonderful Saranya, my
                on-set
                assistant.

            </p>
            <p>@harrysheehan</p>
            <p>@ne0n_grey</p>
        </div>
        <Suspense>
            <masonary_wall :array="array" />
        </Suspense>
    </div>
</template>