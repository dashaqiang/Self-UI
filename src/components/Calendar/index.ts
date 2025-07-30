import Calendar from "./Calendar.vue";
import { withInstall } from '@/utils/with-install'
import './style.scss'

export const SelfCalendar = withInstall(Calendar, 'SelfCalendar')
export default SelfCalendar

export * from './types'