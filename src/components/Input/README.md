# Input 输入框组件

## 组件介绍

用于接收用户输入内容。

## 基本用法

```vue
<SelfInput v-model="value" placeholder="请输入内容" />
```

## Props

| 属性名        | 说明         | 类型                | 默认值   |
| ------------- | ------------ | ------------------- | -------- |
| modelValue    | 绑定值       | string \| number    | ''       |
| type          | 输入类型     | string              | text     |
| label         | 标签         | string              | -        |
| placeholder   | 占位符       | string              | -        |
| disabled      | 是否禁用     | boolean             | false    |
| error         | 是否错误状态 | boolean             | false    |
| errorMessage  | 错误提示     | string              | -        |
| helpText      | 帮助文本     | string              | -        | 