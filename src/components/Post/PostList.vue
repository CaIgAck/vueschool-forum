<script setup lang="ts">
import { reactive } from 'vue'
import { data } from '@/mockup/data'
import type { TPost, TUser } from '@/types'
import BaseFormattingDate from '@/components/UI/BaseFormattingDate.vue'

type TProps = {
  posts: TPost[]
}

const props = defineProps<TProps>()

const users: TUser[] = reactive(data.users)

const getUserByPostId = (userId: string) => {
  return users.find(user => user.id === userId)
}
</script>

<template>
  <div class="post-list">
    <div class="post"
         v-for="post in props.posts"
         :key="post.id"
    >

      <div class="user-info">
        <a href="#" class="user-name">{{getUserByPostId(post.userId).name}}</a>

        <a href="#">
          <img class="avatar-large" :src="getUserByPostId(post.userId).avatar" alt="">
        </a>

      </div>

      <div class="post-content">
        <div>
          <p>
            {{post.text}}
          </p>
        </div>
      </div>

      <div class="post-date text-faded">
        <BaseFormattingDate :date="post.publishedAt" />
      </div>
    </div>
  </div>

</template>

<style scoped>
.post-list {
  margin-top: 20px;
}

.post {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: white;
  padding: 20px 10px;
  padding-bottom: 7px;
  box-shadow: 2px 2px 1px rgba(136, 136, 136, 0.09);
  margin-bottom: 20px;
}

@media (max-width: 820px) {
  .post {
    padding: 0;
  }
}

.post .user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  flex: 1 1 15%;
  margin-right: 5px;
}

.post .user-info > * {
  margin-bottom: 10px;
}

@media (max-width: 820px) {
  .post .user-info {
    order: -2;
    flex-direction: row;
    justify-content: flex-start;
    background: rgba(73, 89, 96, 0.06);
    margin-right: 0;
    padding: 5px 5px 5px 10px;
  }

  .post .user-info .avatar-large {
    height: 35px;
    width: 35px;
    margin-right: 5px;
    order: 1;
  }

  .post .user-info .user-name {
    order: 2;
  }

  .post .user-info > * {
    margin-right: 5px;
    margin-bottom: 0;
  }
}

.post .post-date {
  flex-basis: 100%;
  font-size: 14px;
  text-align: right;
  margin-bottom: 5px;
  padding-right: 7px;
}

@media (max-width: 820px) {
  .post .post-date {
    order: -1;
    flex-basis: 40%;
    background: rgba(73, 89, 96, 0.06);
    padding-right: 10px;
    padding-top: 16px;
    margin-bottom: 0;
  }
}

@media (max-width: 720px) {
  .post {
    padding: 0;
  }
}

.post-content {
  display: flex;
  flex: 1 0 83%;
  padding-left: 15px;
  padding-right: 10px;
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
  word-break: break-word;
}

.post-content h1, .post-content h2, .post-content h3 {
  margin-bottom: 0;
}

.post-content p {
  margin-bottom: 20px;
}

.post-content pre {
  display: grid;
  overflow: auto;
  word-wrap: break-word;
  border-radius: 3px;
  padding: 10px;
}

.post-content blockquote {
  margin: 25px 0;
}

.post-content blockquote {
  display: flex;
  position: relative;
}

.post-content blockquote::before {
  position: absolute;
  top: -25px;
  left: -25px;
  font-size: 42px;
  font-family: FontAwesome,sans-serif;
  content: "\f10e";
  color: #263959;
}

@media (max-width: 820px) {
  .post-content blockquote::before {
    top: -15px;
    left: -18px;
    font-size: 32px;
  }
}

.post-content blockquote {
  padding-left: 20px;
  padding-right: 15px;
  flex-basis: 95%;
  font-weight: 100;
  font-style: italic;
  font-size: 17px;
}

.post-content blockquote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
}

.post-content blockquote.big .author img {
  flex: 1;
  flex-basis: 100%;
  margin-top: 10px;
  width: 80px;
  height: 80px;
}

.post-content blockquote {
  position: relative;
  flex-direction: column;
  border: 2px solid rgba(152, 152, 152, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.post-content blockquote::before {
  position: absolute;
  top: -20px;
  left: -20px;
  font-size: 42px;
  font-family: FontAwesome,sans-serif;
  content: "\f10e";
  color: #263959;
}

@media (max-width: 820px) {
  .post-content blockquote::before {
    top: -18px;
    left: -15px;
    font-size: 32px;
  }
}

.post-content blockquote {
  display: flex;
  flex-basis: 100%;
  padding: 3px 10px 3px 28px;
  background-color: rgba(152, 152, 152, 0.15);
  justify-content: center;
  align-items: center;
}

.post-content blockquote {
  margin-left: 10px;
}

.post-content blockquote {
  margin-left: auto;
  font-size: 20px;
}

.post-content blockquote {
  cursor: pointer;
}

.post-content blockquote {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  padding: 10px;
  font-weight: 100;
  font-style: italic;
  font-size: 17px;
}

.post-content blockquote {
  position: relative;
  padding: 0 10px 0 20px;
  font-weight: 100;
  font-style: italic;
  font-size: 17px;
}

.post-content blockquote::before {
  position: absolute;
  top: -25px;
  left: -25px;
  font-size: 42px;
  font-family: FontAwesome,sans-serif;
  content: "\f10e";
  color: #263959;
}

@media (max-width: 820px) {
  .post-content blockquote::before {
    top: -15px;
    left: -18px;
    font-size: 32px;
  }
}

.post-content blockquote {
  display: block;
  margin-top: 10px;
  font-weight: normal;
}

.post-content blockquote {
  margin-left: 10px;
}
</style>
