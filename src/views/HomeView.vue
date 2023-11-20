<script setup lang="ts">
import { useCategoriesStore } from '@/stores/CategoriesStore'
import { storeToRefs } from 'pinia'
import CategoryList from '@/components/CategoryList.vue'

const { categories } = storeToRefs(useCategoriesStore())

</script>

<template>
  <h1 class="text-center">
    Welcome to forums
  </h1>
  <CategoryList :categories="categories" />
</template>
