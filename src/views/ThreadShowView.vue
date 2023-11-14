<script setup lang="ts">
import { computed, reactive } from 'vue'
import { data } from '@/mockup/data'
import PostList from '@/components/PostList.vue'
import type { TThread, TPost } from '@/types'

type TProps = {
  id: String
}

const props = defineProps<TProps>()

const threads: TThread[] = reactive(data.threads)
const posts: TPost[] = reactive(data.posts)

const thread = computed(() => {
  return threads.find(thread => thread.id === props.id)
})

const threadPosts = computed(() => {
  return posts.filter(post => post.threadId === props.id)
})

</script>

<template>
<div class="col-large push-top">
  <h1>{{ thread.title }}</h1>

  <PostList :posts="threadPosts" />
</div>
</template>
