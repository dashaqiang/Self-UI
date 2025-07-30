# Self-UI 组件库

一个基于 Vue 3 和 TypeScript 的组件库模板，实现全量引入和按需引入。包含基础组件和全局方法。

## 安装

```bash
npm install self-ui
```

## 快速开始

### 全局注册

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import SelfUI from 'self-ui'

const app = createApp(App)
app.use(SelfUI)
app.mount('#app')

// 使用全局 $toast
app.config.globalProperties.$toast('操作成功！')
```

### 按需引入

```vue
<script setup lang="ts">
import { SelfButton, SelfInput, toast } from 'self-ui'

app.use(toast) // 注册 $toast 插件（按需）
</script>

<template>
  <SelfButton type="primary">提交</SelfButton>
  <SelfInput v-model="value" label="用户名" />
</template>
```

## 组件列表

- [Button 按钮](./src/components/Button/README.md)
- [Input 输入框](./src/components/Input/README.md)
- [Calendar 月历组件](./src/components/Calendar/README.md)
- [Toast 插件](./src/plugins/toast/README.md)