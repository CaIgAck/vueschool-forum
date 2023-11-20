<script setup lang="ts">
import ForumList from '@/components/ForumList.vue'
import { data } from '@/mockup/data'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import type { TCategory, TForumElement } from '@/types'

type TProps = {
  id: string
}

const props = defineProps<TProps>()

const forums: Ref<TForumElement[]> = ref(data.forums)
const categories: Ref<TCategory[]> = ref(data.categories)

const category = computed(() => {
  return categories.value.find(category => category.id === props.id)
})

const forumsForCategory = computed(() => {
  return forums.value.filter(forum => forum.categoryId === category.value.id)
})
</script>

<template>
  <h1>{{ category.name }}</h1>
  <ForumList
      :title="category.name"
      :forums="forumsForCategory"
  />
</template>

<style scoped>

</style>
