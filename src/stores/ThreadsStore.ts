import { defineStore } from 'pinia'
import { data } from '@/mockup/data'
import type { TThread } from '@/types'

type ThreadsState = {
  threads: TThread[]
}

export const useThreadsStore = defineStore('ThreadsStore', {
  state: (): ThreadsState => {
    return {
      threads: data.threads
    }
  },
  getters: {},
  actions: {}
})
