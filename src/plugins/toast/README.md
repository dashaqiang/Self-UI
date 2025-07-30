# Toast 插件

## 插件介绍

用于全局弹出轻量级提示信息。

## 基本用法

```js
// 注册插件
import { toast } from 'self-ui'
app.use(toast)

// 在组件中使用
this.$toast('提示内容')
```

## Options

| 属性名   | 说明         | 类型     | 默认值   |
| -------- | ------------ | -------- | -------- |
| message  | 提示内容     | string   | -        |
| position | 显示位置     | string   | center   |
| duration | 显示时长(ms) | number   | 2000     | 