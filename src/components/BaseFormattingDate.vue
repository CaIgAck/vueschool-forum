<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

type TProps = {
  date: number
}

const props = defineProps<TProps>()

const diffForHumans = computed(() => {
  return dayjs.unix(props.date).fromNow()
})

const humanFriendlyDate = computed(() => {
  return dayjs.unix(props.date).format('DD.MM.YYYY')
})

</script>

<template>
  <span :title="humanFriendlyDate">
    {{ diffForHumans }}
  </span>
</template>

<style scoped>

</style>
