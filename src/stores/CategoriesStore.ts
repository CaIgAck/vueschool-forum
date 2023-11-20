import { defineStore } from 'pinia'
import { data } from '@/mockup/data'
import type { TCategory } from '@/types'

type CategoriesState = {
    categories: TCategory[]
}

export const useCategoriesStore = defineStore('CategoriesStore', {
  state: (): CategoriesState => {
    return {
      categories: data.categories
    }
  },
  getters: {},
  actions: {}
})
