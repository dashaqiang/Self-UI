import { createApp } from 'vue'
import App from './App.vue'
import SelfUI from '../src' // 直接引用源码，无需打包

const app = createApp(App)
app.use(SelfUI)
app.mount('#app')