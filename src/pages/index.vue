<script setup lang="ts">
import { useStore } from '@/store/store';
import { storeToRefs } from 'pinia';

const { home } = storeToRefs(useStore())
</script>

<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 mb-16 parkinsans">Deanna Wiggs Illustration</h1>
        <div class="grid grid-rows-1 grid-cols-3 gap-x-4 w-full pb-0">
            <img src="" class="w-full" />
            <div class="flex flex-col gap-8">
                <img src="" class="w-full" />
                <img src="" class="w-full" />
            </div>
            <img src="" class="w-full" />
        </div>
        <div class="pb-16">
            <p class="font-light text-xs">Illustrator</p>
            <p class="font-light text-xs">Content Creator</p>
            <p class="font-light text-xs">Art Director</p>
        </div>
        <div class="grid grid-rows-1 grid-cols-2 gap-x-32 w-full">
            <img src="" />
            <div class="relative">
                <img src=""
                    class="absolute z-10 w-[250px] rounded-full top-[-125px] left-[-125px]" />
                <img src="" class="" />
            </div>
        </div>
    </div>
</template>
