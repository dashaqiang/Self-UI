<template>
  <SelfButton type="primary" @click="showToast">测试按钮</SelfButton>
  <SelfInput v-model="value" label="" type="url" />
  <SelfCalendar @day-click="handleDayclick">
    <template #day="{ day }">
    <div  class="custom-day-content" :class="{
        'checked': isChecked(day.date),
        'error': isError(day.date)
    }" >
    <svg v-if="isError(day.date)" t="1753862063264" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7488" width="32" height="32"><path d="M546.942 511.819L874.4 185.689c9.617-9.577 9.648-25.135 0.07-34.75-9.577-9.618-25.137-9.648-34.75-0.072l-327.6 326.27-327.598-326.269c-9.617-9.577-25.177-9.545-34.752 0.071-9.578 9.616-9.546 25.174 0.07 34.752l327.458 326.128L149.84 837.948c-9.616 9.577-9.647 25.135-0.07 34.751a24.496 24.496 0 0 0 17.411 7.232 24.5 24.5 0 0 0 17.34-7.162l327.6-326.27 327.6 326.27a24.492 24.492 0 0 0 17.34 7.162 24.503 24.503 0 0 0 17.41-7.232c9.578-9.617 9.546-25.175-0.07-34.751l-327.458-326.13z" fill="#ffffff" p-id="7489"></path></svg>
    <svg v-else-if="isChecked(day.date)" t="1753862099341" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8574" width="32" height="32"><path d="M844.544 319.8464L409.6 754.7904l-230.144-230.144 50.688-50.688L409.6 653.4144l384.256-384.256 50.688 50.688z" fill="#ffffff" p-id="8575"></path></svg>
    <span v-else class="custom-day-number">
        {{ day.day }}
      </span>
    </div>
  </template>
  </SelfCalendar>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const value = ref('')
import { getCurrentInstance } from 'vue'
const { appContext } = getCurrentInstance()!
function showToast() {
  appContext.config.globalProperties.$toast({
    message: '操作成功！',
    duration: 2000
  })
}
const handleDayclick = (day: any)=> {
  appContext.config.globalProperties.$toast({
    message: day.date,
    duration: 2000
  })
  console.log('day', day)
}
const checkedDays = reactive( ['2025-07-26', '2025-07-27'])
const errorDays = reactive( ['2025-07-18', '2025-07-17'])
const isChecked = (day: string) => {
    return checkedDays.includes(day);
};
const isError = (day: string) => {
    return errorDays.includes(day);
};
</script>
<style lang="scss" scoped>

.calendar-wrapper{
   width: 100%;
    max-width: 500px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    margin: 0 auto;
}
.custom-day-content{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.custom-day-content.checked {
  background: #58d1b9;
  position: relative;
  overflow: hidden;
}
.custom-day-content.error {
  background: #ee6f6f;
  position: relative;
  overflow: hidden;
}
</style>