import { defineStore } from 'pinia'
import { useThreadsStore } from './ThreadsStore'
import { data } from '@/mockup/data'
import type { TPost, TThread } from '@/types'

type PostState = {
    posts: TPost[]
}

export const usePostsStore = defineStore('PostsStore', {
  state: (): PostState => {
    return {
      posts: data.posts
    }
  },
  getters: {
    getPostsGetter: (state: PostState): PostState['posts'] => state.posts
  },
  actions: {
    createPost (post: TPost) {
      post.id = Math.random().toString()
      this.posts.push(post)

      const thread = useThreadsStore().threads.find((thread: TThread) => thread.id === post.threadId)
      thread.posts.push(post.id)
    }
  }
})
