<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router';

import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

import { useElementHover } from '@vueuse/core'
import { Icon } from '@iconify/vue';

const props = defineProps<{ route: RouteRecordRaw }>()
const children = computed(() => props.route.children?.filter((_, i) => i > 0))



const dropdown = ref()
const isHovered = useElementHover(dropdown)
</script>


<template>
    <li ref="dropdown">
        <RouterLink :to="route.path" class="flex items-center gap-2">
            {{ route.children[0].name }}
            <Icon icon="material-symbols:arrow-drop-down" />
        </RouterLink>
        <ul v-if="isHovered" class="flex flex-col pl-4 pt-4 gap-2">
            <li v-for="child in children">
                <RouterLink :to="`${route.path}/${child.path}`">
                    {{ child.name }}
                </RouterLink>
            </li>
        </ul>
    </li>
</template>
