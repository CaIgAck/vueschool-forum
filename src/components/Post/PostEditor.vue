<script setup lang="ts">
import { ref } from 'vue'
import type { TPost } from '@/types'

type TProps = {
  id: string
}

type TEmits = {
  (e: 'save-post', post: TPost): void
}

const props = defineProps<TProps>()
const emits = defineEmits<TEmits>()
const addPost = () => {
  const postId = Math.random().toString()
  const post: TPost = {
    id: postId,
    text: newPostText.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: props.id,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
  }

  emits('save-post', post)

  newPostText.value = ''
}

const newPostText = ref(null)

</script>

<template>
  <div class="col-full">
    <form @submit.prevent="addPost">
      <div class="form-group">
        <textarea v-model="newPostText" name="" id="" cols="30" rows="10" class="form-input"/>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
