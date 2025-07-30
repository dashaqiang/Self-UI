<template>
    <div class="calendar-wrapper">
        <div class="header">
            <div class="pre" @click="prevMonth">
                <svg t="1753852518284" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2104" width="32" height="32"><path d="M499.2 951.466667c-234.666667 0-426.666667-192-426.666667-426.666667 0-17.066667 0-38.4 4.266667-55.466667 4.266667-12.8 12.8-17.066667 25.6-17.066666 12.8 4.266667 17.066667 12.8 17.066667 25.6-4.266667 12.8-4.266667 29.866667-4.266667 46.933333 0 213.333333 170.666667 384 384 384s384-170.666667 384-384-170.666667-384-384-384c-25.6 0-46.933333 4.266667-72.533333 8.533333-12.8 0-21.333333-4.266667-25.6-17.066666 0-12.8 4.266667-21.333333 17.066666-25.6 25.6-4.266667 51.2-8.533333 81.066667-8.533334 234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667z" fill="#bfbfbf" p-id="2105"></path><path d="M119.466667 418.133333h-8.533334c-8.533333-4.266667-17.066667-17.066667-12.8-29.866666 42.666667-119.466667 128-213.333333 238.933334-256 12.8-4.266667 21.333333 0 25.6 12.8 4.266667 12.8 0 21.333333-12.8 25.6C256 213.333333 174.933333 298.666667 140.8 405.333333c-4.266667 8.533333-12.8 12.8-21.333333 12.8z" fill="#bfbfbf" p-id="2106"></path><path d="M558.933333 691.2c-4.266667 0-12.8 0-17.066666-4.266667l-128-128c-8.533333-8.533333-8.533333-21.333333 0-29.866666s21.333333-8.533333 29.866666 0l128 128c8.533333 8.533333 8.533333 21.333333 0 29.866666 0 4.266667-8.533333 4.266667-12.8 4.266667z" fill="#bfbfbf" p-id="2107"></path><path d="M435.2 558.933333c-4.266667 0-12.8 0-17.066667-4.266666-8.533333-8.533333-8.533333-21.333333 0-29.866667l128-128c8.533333-8.533333 21.333333-8.533333 29.866667 0s8.533333 21.333333 0 29.866667l-128 128c0 4.266667-8.533333 4.266667-12.8 4.266666z" fill="#bfbfbf" p-id="2108"></path></svg>
            </div>
            <div>{{ currentYearMonth }}</div>
            <div class="next" @click="nextMonth">
                <svg t="1753852845143" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2887" width="32" height="32"><path d="M499.2 951.466667c-234.666667 0-426.666667-192-426.666667-426.666667 0-17.066667 0-38.4 4.266667-55.466667 4.266667-12.8 12.8-17.066667 25.6-17.066666 12.8 4.266667 17.066667 12.8 17.066667 25.6-4.266667 12.8-4.266667 29.866667-4.266667 46.933333 0 213.333333 170.666667 384 384 384s384-170.666667 384-384-170.666667-384-384-384c-25.6 0-46.933333 4.266667-72.533333 8.533333-12.8 0-21.333333-4.266667-25.6-17.066666 0-12.8 4.266667-21.333333 17.066666-25.6 25.6-4.266667 51.2-8.533333 81.066667-8.533334 234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667z" fill="#bfbfbf" p-id="2888"></path><path d="M119.466667 418.133333h-8.533334c-8.533333-4.266667-17.066667-17.066667-12.8-29.866666 42.666667-119.466667 128-213.333333 238.933334-256 12.8-4.266667 21.333333 0 25.6 12.8 4.266667 12.8 0 21.333333-12.8 25.6C256 213.333333 174.933333 298.666667 140.8 405.333333c-4.266667 8.533333-12.8 12.8-21.333333 12.8z" fill="#bfbfbf" p-id="2889"></path><path d="M605.866667 558.933333c-4.266667 0-12.8 0-17.066667-4.266666l-128-128c-8.533333-8.533333-8.533333-21.333333 0-29.866667s21.333333-8.533333 29.866667 0l128 128c8.533333 8.533333 8.533333 21.333333 0 29.866667 0 4.266667-8.533333 4.266667-12.8 4.266666z" fill="#bfbfbf" p-id="2890"></path><path d="M473.6 691.2c-4.266667 0-12.8 0-17.066667-4.266667-8.533333-8.533333-8.533333-21.333333 0-29.866666l128-128c8.533333-8.533333 21.333333-8.533333 29.866667 0s8.533333 21.333333 0 29.866666l-128 128c0 4.266667-8.533333 4.266667-12.8 4.266667z" fill="#bfbfbf" p-id="2891"></path></svg>
            </div>
        </div>
        <div class="week">
            <div class="week-item" v-for="(day, index) in ['日', '一', '二', '三', '四', '五', '六']" :key="index">
                {{ day }}
            </div>
        </div>
        <div class="days">
            <div class="empty-item" v-for="empty in dates.firstDayWeek"></div>
            <div class="day-item" v-for="(day, key) in dates.days"
            @click="handleDayClick(day)"
            :class="{
                        'today': showToday && isToday(day.date)
                    }" >
                    <slot name="day" :day="day">
                        <div>
                            <span class="day-number">{{ day.day }}</span>
                        </div>
                    </slot>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import isoWeek from 'dayjs/plugin/isoWeek'
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(weekday)
dayjs.extend(isoWeek)
dayjs.extend(isLeapYear)

import { defineProps, defineEmits, onMounted, computed, ref } from 'vue'
import type { DayType } from './types'

const props = defineProps({
  showToday: {
      type: Boolean,
      default: false
  },
  initDate: {
    type: [String, Number, Date],
    default: () => dayjs()
  },

//   checkedDays: {
//     type: Array as () => string[],
//     default: []
//   }
})
const emit = defineEmits<{
  (e: 'day-click', value: DayType): void
}>()


const currentDate = ref(dayjs(props.initDate))
const selectedDay = ref(dayjs(props.initDate))

const getMonthDays = (year: number, month: number)=> {
  // month 是 1-12，dayjs 需要 0-11 的月份索引
  const startOfMonth = dayjs(`${year}-${month.toString().padStart(2, '0')}-01`)
  const daysInMonth = startOfMonth.daysInMonth()
  const firstDayWeek = startOfMonth.day() // 0 是周日，6 是周六

  const days: DayType[]= []

  for (let i = 0; i < daysInMonth; i++) {
    const date = startOfMonth.add(i, 'day')
    days.push({
      date: date.format('YYYY-MM-DD'),
      day: date.date(),               // 几号
      weekDay: date.day(),            // 0-6，0 是周日
      weekDayName: date.format('dddd') // 星期几的名字，如 Monday
    })
  }
  return {
    year,
    month,
    firstDayWeek, // 0=周日
    daysInMonth,
    days
  }
}
const isToday = (day: string) => {
    return dayjs(selectedDay.value).format('YYYY-MM-DD') == day;
};

const handleDayClick = (dayInfo: DayType) => {
    emit('day-click', dayInfo);
};
const prevMonth = () => {
  const prev = currentDate.value.subtract(1, 'month')
  currentDate.value = prev
}

const nextMonth = () => {
  const next = currentDate.value.add(1, 'month')
  currentDate.value = next
}


const currentYearMonth = computed(() => {
return dayjs(currentDate.value).format('YYYY年MM月')
})
const dates = computed(() => {
  const currentMonth = dayjs(currentDate.value).month() + 1 // dayjs 的月份是从 0 开始的
  const currentYear = dayjs(currentDate.value).year()
  return getMonthDays(currentYear, currentMonth)
})
// onMounted(() => {
//   console.log('dates', dates.value)
// })
</script>