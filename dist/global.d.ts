
declare module 'vue' {
  export interface GlobalComponents {
    SelfButton: typeof import('self-ui')['SelfButton']
    SelfCalendar: typeof import('self-ui')['SelfCalendar']
    SelfInput: typeof import('self-ui')['SelfInput']
  }
  interface ComponentCustomProperties {
    $toast: typeof import('self-ui')['ToastFn']
  }
}
