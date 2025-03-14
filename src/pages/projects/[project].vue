<script setup lang="ts">
import { useStore } from '@/store/store';

import { computed } from 'vue';
import { useRoute } from 'vue-router';

import masonary_wall from "@/components/masonary_wall.vue";
import { useTitle } from '@vueuse/core';


const route = useRoute()
const { get_project } = useStore()

const project = computed(() => get_project(route.path))
const has_subtitle = computed(() => 'subtitle' in project.value)
</script>


<template>
    <div>
        <template v-if="has_subtitle">
            <h1 class="text-4xl font-bold py-4 pb-12 pl-4">{{ project.title }}</h1>
            <h2 v-if="has_subtitle" class="text-3xl font-bold text-center py-4 pb-12">{{ project.subtitle }}</h2>
        </template>
        <template v-else>
            <h1 class="text-3xl font-bold text-center py-4 pb-12">{{ project.title }}</h1>
        </template>
        <masonary_wall :array="project.project_assets" />
    </div>
</template>