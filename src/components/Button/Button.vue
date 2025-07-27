<template>
  <button 
    :class="[
      'Self-button',
      `Self-button--${type}`,
      `Self-button--${size}`,
      {
        'Self-button--block': block,
        'Self-button--disabled': disabled,
        'Self-button--loading': loading
      }
    ]" 
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="Self-button__loader"></span>
    <span class="Self-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { ButtonType, ButtonSize } from './types'

const props = defineProps({
  type: {
    type: String as () => ButtonType,
    default: 'default'
  },
  size: {
    type: String as () => ButtonSize,
    default: 'medium'
  },
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>