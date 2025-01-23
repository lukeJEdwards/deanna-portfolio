<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

import type { RouteRecordRaw } from 'vue-router';

const props = defineProps<{ route: { path : string, children:RouteRecordRaw[]}}>()
const open = ref(false)

</script>

<template>
    <div class="flex gap-2">
        <RouterLink :to="route.path" class="hover:text-slate-200">
            {{ route.children[0].name }}
        </RouterLink>
        <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" @click="open = !open"
            class="hover:cursor-pointer" />
    </div>
    <ul v-if="open">
        <template v-for="child in route.children">
            <li v-if="child.path != ''">
                <RouterLink :to="`${route.path}/${child.path}`">
                    {{ child.name }}
                </RouterLink>
            </li>
        </template>
    </ul>
</template>

