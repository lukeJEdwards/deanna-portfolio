<script setup lang="ts">
import { useStore } from '@/store/store';
import { useRoute } from 'vue-router';


const route = useRoute()
const { get_route } = useStore()

const category = get_route(route.path)
</script>

<template>
    <div>
        Index
    </div>
</template>
