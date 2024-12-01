<script setup lang="ts">
const props = defineProps<{ array: string[]}>()
</script>

<template>
    <masonry-wall :items="array" :gap="16">
        <template #default="{ item, index }">
            <img :src="item" />
            <p>
                {{ item.split("/").pop()?.split(".")[0] }}
            </p>
        </template>
    </masonry-wall>
</template>
