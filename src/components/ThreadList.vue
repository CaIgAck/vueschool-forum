<script setup lang="ts">
import type { TThread, TUser } from '@/types'
import BaseFormattingDate from '@/components/BaseFormattingDate.vue'

type TProps = {
  threads: TThread[]
  users: TUser[]
}

const props = defineProps<TProps>()
const getUserById = (userId: string) => {
  return props.users.find(user => user.id === userId)
}
</script>

<template>
  <div class="col-full">

    <div class="thread-list">

      <h2 class="list-title">Threads</h2>

      <div v-for="thread in props.threads" :key="thread.id" class="thread">

        <div>
          <p>
            <router-link :to="`/thread/${thread.id}`">{{ thread.title }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ getUserById(thread.userId).name }}</a>,
            <BaseFormattingDate :date="thread.publishedAt" />.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }} replies
          </p>

          <img class="avatar-medium" :src="getUserById(thread.userId).avatar" alt="">

          <div>
            <p class="text-xsmall">
              <a href="#">{{ getUserById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <BaseFormattingDate :date="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
