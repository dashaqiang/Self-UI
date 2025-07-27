# Self-UI 组件库

一个基于 Vue 3 和 TypeScript 的组件库模板，实现全量引入和按需引入。包含 Button、Input 等基础组件，并支持全局 $toast 方法。

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

## Button 组件

### Props

| 属性      | 类型           | 默认值    | 可选值                                      |
|-----------|----------------|----------|---------------------------------------------|
| type      | `ButtonType`   | 'default'| 'default', 'primary', 'success', 'warning', 'danger' |
| size      | `ButtonSize`   | 'medium' | 'small', 'medium', 'large'                  |
| block     | `boolean`      | false    | -                                           |
| disabled  | `boolean`      | false    | -                                           |
| loading   | `boolean`      | false    | -                                           |

### 事件

| 事件   | 类型         | 说明           |
|--------|--------------|----------------|
| click  | `MouseEvent` | 按钮点击事件   |

### 示例

```vue
<SelfButton 
  type="primary" 
  size="large" 
  :loading="isLoading"
  @click="handleClick"
>
  提交
</SelfButton>
```

## Input 组件

### Props

| 属性         | 类型             | 默认值 | 说明               |
|--------------|------------------|--------|--------------------|
| modelValue   | `string\|number` | ''     | v-model 绑定       |
| type         | `InputType`      | 'text' | 输入框类型         |
| label        | `string`         | -      | 输入框标签         |
| placeholder  | `string`         | -      | 占位文本           |
| disabled     | `boolean`        | false  | 禁用输入框         |
| error        | `boolean`        | false  | 错误状态           |
| errorMessage | `string`         | -      | 错误提示           |
| helpText     | `string`         | -      | 帮助文本           |

### 事件

| 事件             | 类型            | 说明                 |
|------------------|-----------------|----------------------|
| update:modelValue| `string\|number`| 输入值变化           |
| focus            | `FocusEvent`    | 输入框获得焦点       |
| blur             | `FocusEvent`    | 输入框失去焦点       |

### 插槽

| 名称    | 说明               |
|---------|--------------------|
| prefix  | 输入框前置内容     |
| suffix  | 输入框后置内容     |

### 示例

```vue
<SelfInput
  v-model="username"
  label="用户名"
  placeholder="请输入用户名"
  :error="!!errorMessage"
  :error-message="errorMessage"
>
  <template #prefix>
    <UserIcon />
  </template>
</SelfInput>
```

## $toast 全局方法

支持移动端风格的提示，默认居中，可选 top/bottom。

```typescript
// 全局调用
this.$toast('操作成功！')

// 传递参数
this.$toast({ message: '顶部提示', position: 'top', duration: 3000 })
```