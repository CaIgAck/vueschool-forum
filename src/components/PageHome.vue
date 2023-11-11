<script setup lang="ts">
import data from '../mockup/data.json'
import { reactive } from 'vue'

const threads = reactive(data.threads)
const posts = reactive(data.posts)
const users = reactive(data.users)

const postById = (postId: string) => {
  return posts.find(post => post.id === postId)
}

const getUserByPostId = (postId: string) => {
  return users.find(user => user.id === postById(postId).userId)
}

</script>

<template>
  <div v-for="thread in threads"
       :key="thread.id"
       class="col-large push-top"
  >
    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div class="post"
           v-for="postId in thread.posts"
           :key="postId"
      >

        <div class="user-info">
          <a href="#" class="user-name">{{getUserByPostId(postId).name}}</a>

          <a href="#">
            <img class="avatar-large" :src="getUserByPostId(postId).avatar" alt="">
          </a>

          <p class="desktop-only text-small">107 posts</p>

        </div>

        <div class="post-content">
          <div>
            <p>
              {{postById(postId).text}}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{postById(postId).publishedAt}}
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
