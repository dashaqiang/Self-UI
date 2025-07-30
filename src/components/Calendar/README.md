# Calendar 日历组件

## 组件介绍

用于选择日期和时间的日历组件。

## 基本用法

```vue
<SelfCalendar v-model="date" />
```

## Props

| 属性名       | 说明         | 类型    | 默认值   |
| ------------ | ------------ | ------- | -------- |
| modelValue   | 绑定值       | Date    | -        |
| type         | 选择类型     | string  | date     |
| minDate      | 最小日期     | Date    | -        |
| maxDate      | 最大日期     | Date    | -        |
| showToday    | 显示今天     | boolean | true     |
| showWeek     | 显示星期     | boolean | true     |

## Events

| 事件名 | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| change | 日期改变事件 | value    |
| select | 日期选中事件 | value    |