<script setup lang="ts">
import ForumList from '@/components/ForumList.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { data } from '@/mockup/data'
import type { TCategory, TForumElement } from '@/types'

type TProps = {
  categories: TCategory[]
}

const props = defineProps<TProps>()

const forums: Ref<TForumElement[]> = ref(data.forums)

const getForumsForCategory = (category: TCategory) => {
  return forums.value.filter(forum => forum.categoryId === category.id)
}

</script>

<template>
  <ForumList
      v-for="category in props.categories"
      :key="category.id"
      :forums="getForumsForCategory(category)"
      :title="category.name"
      :category-id="category.id"
  />
</template>

<style scoped>

</style>
