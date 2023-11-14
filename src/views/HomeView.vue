<script setup lang="ts">
import ThreadList from '@/components/ThreadList.vue'
import { data } from '@/mockup/data'
import { reactive } from 'vue'
import type { TThread, TUser } from '@/types'

const threads: TThread[] = reactive(data.threads)
const users: TUser[] = reactive(data.users)

</script>

<template>
  <h1>
    Welcome to forums
  </h1>
  <ThreadList :threads="threads" :users="users" />
</template>
