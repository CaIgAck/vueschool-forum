<script setup lang="ts">
import { computed } from 'vue'

type Emits = {
  (e: 'input', value: Event)
}

const props = defineProps(['modelValue', 'type', 'placeholder', 'disabled', 'errorMessage'])
const emits = defineEmits<Emits>()

const normalizedModelValue = computed({
  get () {
    return props.modelValue
  },
  set (newValue: Event) {
    handleInput(newValue)
  }
})

const handleInput = (newValue: Event) => {
  emits('input', newValue)
}

</script>

<template>
  <div>
    <input
        v-model="normalizedModelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        class="form-input"
        @input="handleInput"
    />
  </div>
</template>

<style scoped>

</style>
