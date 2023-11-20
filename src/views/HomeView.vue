<script setup lang="ts">
import { data } from '@/mockup/data'
import { reactive } from 'vue'
import type { TCategory } from '@/types'
import CategoryList from '@/components/CategoryList.vue'

const categories: TCategory[] = reactive(data.categories)
</script>

<template>
  <h1 class="text-center">
    Welcome to forums
  </h1>
  <CategoryList :categories="categories" />
</template>
