<script setup lang="ts">
import { useImageBuilder } from '@/composables/useImageBuilder';
import { type asset } from "@/types/custom.types"


const props = defineProps<{ array: asset[] | undefined}>()

</script>

<template>
    <div class="columns-[300px]">
        <img v-for="item in array" :src="useImageBuilder(item, 720)" class="mb-4" />
    </div>
</template>
