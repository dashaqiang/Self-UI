import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const componentsDir = path.resolve(__dirname, '../src/components')
const pluginsDir = path.resolve(__dirname, '../src/plugins')
const componentFiles = fs.readdirSync(componentsDir)
const pluginFiles = fs.readdirSync(pluginsDir)

const componentTypes = componentFiles
  .filter(name => fs.existsSync(path.join(componentsDir, name, 'index.ts')))
  .map(name => `    Self${name}: typeof import('self-ui')['Self${name}']`)

const pluginTypes = pluginFiles
  .filter(name => name.endsWith('.ts') && name !== 'index.ts')
  .map(name => {
    const pluginName = name.replace('.ts', '')
    const typeName = pluginName.charAt(0).toUpperCase() + pluginName.slice(1) + 'Fn'
    return `    $${pluginName}: typeof import('self-ui')['${typeName}']`
  })

const content = `
declare module 'vue' {
  export interface GlobalComponents {
${componentTypes.join('\n')}
  }
  interface ComponentCustomProperties {
${pluginTypes.join('\n')}
  }
}
`
fs.writeFileSync(
  path.resolve(__dirname, '../dist/global.d.ts'), // 只生成到 dist
  content
)