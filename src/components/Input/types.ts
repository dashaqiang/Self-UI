// 输入框类型
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'

export interface InputProps {
    modelValue?: string | number
    type?: InputType
    label?: string
    placeholder?: string
    disabled?: boolean
    error?: boolean
    errorMessage?: string
    helpText?: string
  }