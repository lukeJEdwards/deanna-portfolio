<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from './components/navbar.vue';

</script>

<template>
  <navbar />
  <RouterView class="flex flex-col flex-grow overflow-y-auto max-h-screen w-5/6 p-4" />
</template>

