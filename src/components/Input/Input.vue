<template>
  <div class="Self-input__wrapper">
    <label v-if="label" class="Self-input__label">{{ label }}</label>
    <div class="Self-input__container">
      <input
        :class="[
          'Self-input',
          {
            'Self-input--disabled': disabled,
            'Self-input--error': error,
            'Self-input--with-icon': $slots.prefix || $slots.suffix
          }
        ]"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span v-if="$slots.prefix" class="Self-input__prefix">
        <slot name="prefix"></slot>
      </span>
      <span v-if="$slots.suffix" class="Self-input__suffix">
        <slot name="suffix"></slot>
      </span>
    </div>
    <div v-if="error && errorMessage" class="Self-input__error-message">{{ errorMessage }}</div>
    <div v-if="helpText" class="Self-input__help-text">{{ helpText }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { InputType } from './types'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String as () => InputType,
    default: 'text'
  },
  label: String,
  placeholder: String,
  disabled: Boolean,
  error: Boolean,
  errorMessage: String,
  helpText: String
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>