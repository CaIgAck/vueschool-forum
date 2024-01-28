<script setup lang="ts">
import { computed, reactive } from 'vue'
import { data } from '@/mockup/data'
import PostList from '@/components/Post/PostList.vue'
import type { TThread, TPost } from '@/types'
import PostEditor from '@/components/Post/PostEditor.vue'
import { usePostsStore } from '@/stores/PostsStore'
import { storeToRefs } from 'pinia'

type TProps = {
  id: string
}

const props = defineProps<TProps>()

const store = usePostsStore()
const { getPostsGetter } = storeToRefs(store)

const threads: TThread[] = reactive(data.threads)
const posts: TPost[] = reactive(data.posts)

const thread = computed(() => {
  return threads.find(thread => thread.id === props.id)
})

const threadPosts = computed(() => {
  return posts.filter(post => post.threadId === props.id)
})

const onCreatePost = (post: TPost) => {
  store.createPost(post)
}

</script>

<template>
<div class="col-large push-top">
  <h1>{{ thread.title }}</h1>
  {{getPostsGetter}}
  <PostList :posts="threadPosts" />

  <PostEditor :id="props.id" @save-post="onCreatePost" />
</div>
</template>
