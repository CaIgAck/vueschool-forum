<script setup lang="ts">
import ThreadList from '@/components/ThreadList.vue'
import { data } from '@/mockup/data'
import { computed, reactive } from 'vue'
import type { TForumElement, TThread, TUser } from '@/types'

type TProps = {
  id: string
}

const props = defineProps<TProps>()

const users: TUser[] = reactive(data.users)
const threads: TThread[] = reactive(data.threads)
const forums: TForumElement[] = reactive(data.forums)

const forum = computed(() => {
  return forums.find(forum => forum.id === props.id)
})
const filteredThreads = computed(() => {
  return threads.filter(thread => thread.forumId === props.id)
})

</script>

<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="filteredThreads" :users="users"/>
  </div>
</template>
