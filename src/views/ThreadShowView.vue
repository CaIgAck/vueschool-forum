<script setup lang="ts">
import { computed, reactive } from 'vue'
import { data } from '@/mockup/data'
import PostList from '@/components/PostList.vue'
import type { TThread, TPost } from '@/types'
import PostEditor from '@/components/PostEditor.vue'

type TProps = {
  id: string
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

const createPost = (post: TPost) => {
  posts.push(post)
  threads.find(thread => thread.id === props.id).posts.push(post.id)
}

</script>

<template>
<div class="col-large push-top">
  <h1>{{ thread.title }}</h1>

  <PostList :posts="threadPosts" />

  <PostEditor :id="props.id" @save-post="createPost" />
</div>
</template>
