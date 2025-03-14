<script setup lang="ts">
import { useStore } from '@/store/store';
import { useRoute } from 'vue-router';

import masonary_wall from "@/components/masonary_wall.vue";
import { useTitle } from '@vueuse/core';


const route = useRoute()
const { get_category } = useStore()

const single_page = get_category(route.path)
</script>

<template>
    <div>
        <h1 class="text-xl font-bold text-center py-4 pb-12">{{ single_page.name }}</h1>
        <masonary_wall :array="single_page.project_assets" />
    </div>
</template>