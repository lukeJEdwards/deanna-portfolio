<script setup lang="ts">
import { useImageBuilder } from '@/composables/useImageBuilder';

import type { internalGroqTypeReferenceTo } from "@/types/sanity.types";

type asset = {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
}

const props = defineProps<{ array: asset[] | undefined}>()

</script>

<template>
    <template v-if="array">
        <masonry-wall :items="array" :gap="16">
            <template #default="{ item, index }">
                <img :src="useImageBuilder(item, 720)" />
            </template>
        </masonry-wall>
    </template>
</template>
