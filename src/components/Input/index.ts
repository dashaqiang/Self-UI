import Input from './Input.vue'
import { withInstall } from '@/utils/with-install'
import './style.scss'

export const SelfInput = withInstall(Input, 'SelfInput')
export default SelfInput

export * from './types'