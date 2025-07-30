# Calendar 日历组件

## 组件介绍

用于选择日期和时间的日历组件，支持自定义日期单元格内容和交互事件。

## 基本用法

```vue
<SelfCalendar @day-click="handleDayClick" />
```

## Props

| 属性名    | 说明         | 类型                  | 默认值   |
| --------- | ------------ | --------------------- | -------- |
| showToday | 显示今天     | boolean               | false    |
| initDate  | 初始日期     | String/Number/Date    | 当前日期 |

## Events

| 事件名    | 说明         | 回调参数 |
| --------- | ------------ | -------- |
| day-click | 日期点击事件 | day      |

## Slots

### #day 插槽

自定义日期单元格内容，支持完全自定义每个日期的显示样式。

#### 插槽参数

| 参数名 | 类型   | 说明     |
| ------ | ------ | -------- |
| day    | Object | 日期信息 |

#### day 对象结构

```typescript
{
  date: string,  // 日期字符串，格式：YYYY-MM-DD
  day: number,   // 日期数字（1-31）
  month: number, // 月份（0-11）
  year: number   // 年份
}
```

#### 使用示例

```vue
<template>
  <SelfCalendar @day-click="handleDayClick">
    <template #day="{ day }">
      <div 
        class="custom-day-content"
        :class="{
          'checked': isChecked(day.date),
          'error': isError(day.date)
        }"
      >
        <svg v-if="isError(day.date)" class="icon-error">
          <!-- 错误图标 -->
        </svg>
        <svg v-else-if="isChecked(day.date)" class="icon-check">
          <!-- 勾选图标 -->
        </svg>
        <span v-else class="custom-day-number">
          {{ day.day }}
        </span>
      </div>
    </template>
  </SelfCalendar>
</template>

<script setup>
import { reactive } from 'vue'

const checkedDays = reactive(['2025-07-26', '2025-07-27'])
const errorDays = reactive(['2025-07-18', '2025-07-17'])

const isChecked = (day) => checkedDays.includes(day)
const isError = (day) => errorDays.includes(day)

const handleDayClick = (day) => {
  console.log('点击了日期:', day.date)
}
</script>

<style scoped>
.custom-day-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.custom-day-content.checked {
  background: #58d1b9;
  color: white;
}

.custom-day-content.error {
  background: #ee6f6f;
  color: white;
}

.custom-day-number {
  font-size: 14px;
}
</style>
```

## 高级用法

### 自定义日期样式
通过 `#day` 插槽可以完全控制每个日期的显示内容，适用于需要标记特殊日期（如节假日、重要事件等）的场景。

### 事件处理
- 使用 `@day-click` 事件监听用户点击日期的行为
- 结合插槽自定义实现打卡、标记等功能