<script setup lang="ts">
import data from '../mockup/data.json'
import { reactive } from 'vue'

const threads = reactive(data.threads)
const users = reactive(data.users)

const getUserById = (userId: string) => {
  return users.find(user => user.id === userId)
}
</script>

<template>
  <div class="col-full">

    <div class="thread-list">

      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <a href="#">{{ thread.title }}</a>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ getUserById(thread.userId).name }}</a>, {{ thread.publishedAt }}.
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
            <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
