import type { App, Plugin, Component } from 'vue'

export const withInstall = <T extends Component>(component: T, alias?: string) => {
  const comp = component as any
  comp.install = (app: App) => {
    app.component(alias || comp.name || comp.displayName, component)
  }
  return component as T & Plugin
}