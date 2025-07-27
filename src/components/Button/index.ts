import Button from './Button.vue'
import { withInstall } from '@/utils/with-install'
import './style.scss'

export const SelfButton = withInstall(Button, 'SelfButton')
export default SelfButton

export * from './types'