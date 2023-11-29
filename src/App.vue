<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/Navigation/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
