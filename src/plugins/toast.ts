import { createVNode, render, App } from 'vue'
import Toast from '@/components/Toast/Toast.vue'

export type ToastOptions = {
  message: string
  position?: 'center' | 'top' | 'bottom'
  duration?: number
}

function toast(options: string | ToastOptions) {
  const opts: ToastOptions = typeof options === 'string'
    ? { message: options }
    : options

  const container = document.createElement('div')
  document.body.appendChild(container)

  const vnode = createVNode(Toast, {
    ...opts,
    onVanish: () => {
      render(null, container)
      document.body.removeChild(container)
    }
  })
  render(vnode, container)
}

const ToastPlugin = {
  install(app: App) {
    app.config.globalProperties.$toast = toast
  }
}
export default ToastPlugin

export type ToastFn = typeof toast