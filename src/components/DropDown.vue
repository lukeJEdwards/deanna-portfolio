<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import type { Project } from '@/types/sanity.types';
import type { NavQueryResult } from '@/types/custom.types';

const props = defineProps<{ route: NavQueryResult, children: Project[] }>()
const open = ref(false)

</script>

<template>
    <div class="flex gap-2">
        <RouterLink :to="`/categories${route.path.current}`" class="hover:text-slate-200">
            {{ route.name }}
        </RouterLink>
        <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" @click="open = !open"
            class="hover:cursor-pointer" />
    </div>
    <ul v-if="open">
        <template v-for="child in children">
            <li v-if="child.slug.current != ''">
                <RouterLink :to="`/projects/${child.slug.current}`">
                    {{ child.title }}
                </RouterLink>
            </li>
        </template>
    </ul>
</template>

