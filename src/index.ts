
import './styles/index.scss'

export * from './components/components'  // 提供按需引入的导出组件列表
export * from './plugins'  // 提供按需引入的导出插件列表
export * from './types'

import { App } from 'vue'
import * as components from './components/components'  // 导入所有组件对象
import * as plugins from './plugins' // 自动导入所有插件

export default {
  install(app: App) {
    // 注册所有组件
    Object.values(components).forEach((comp: any) => {
      if (comp?.install) {
        app.use(comp) // 注册所有组件对象
      }
    })
    // 注册所有插件
    Object.values(plugins).forEach((plugin: any) => {
      if (plugin?.install) {
        app.use(plugin)
      }
    })
  }
}