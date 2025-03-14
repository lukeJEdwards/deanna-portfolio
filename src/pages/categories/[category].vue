<script setup lang="ts">
import { useImageBuilder } from "@/composables/useImageBuilder"
import { useStore } from '@/store/store';

import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const { get_category } = useStore()

const category = computed(() => get_category(route.path))
</script>

<template>
    <div>
        <h1 class="text-xl font-bold text-center py-4 pb-12">{{ category.name }}</h1>
        <div class="grid grid-cols-3">
            <RouterLink :to="`/projects/${project.slug.current}`" v-for="project in category.projects"
                class="flex flex-col p-4 justify-center items-center">
                <h2 class="text-m pb-4">{{ project.title }}</h2>
                <img :src="useImageBuilder(project.thumbnail, 400)" />
            </RouterLink>
        </div>
    </div>
</template>