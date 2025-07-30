<template>
  <transition name="toast-fade">
    <div v-if="visible" :class="['self-toast', position]" @click="close">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  message: string
  position?: 'center' | 'top' | 'bottom'
  duration?: number
}>(), {
  position: 'center',
  duration: 3000 // 你也可以顺便设一个默认时长
})

const visible = ref(true)
let timer: number

onMounted(() => {
  timer = window.setTimeout(() => {
    visible.value = false
  }, props.duration ?? 2000)
})

function close() {
  visible.value = false
  clearTimeout(timer)
}

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<style scoped>
.self-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  min-width: 120px;
  max-width: 80vw;
  padding: 12px 20px;
  background: rgba(0,0,0,0.8);
  color: #fff;
  border-radius: 20px;
  font-size: 16px;
  text-align: center;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  pointer-events: auto;
}
.self-toast.center {
  top: 50%;
  transform: translate(-50%, -50%);
}
.self-toast.top {
  top: 15%;
}
.self-toast.bottom {
  bottom: 15%;
}
.toast-fade-enter-active, .toast-fade-leave-active {
  transition: opacity 0.3s;
}
.toast-fade-enter-from, .toast-fade-leave-to {
  opacity: 0;
}
</style>