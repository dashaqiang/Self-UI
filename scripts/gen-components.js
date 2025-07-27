import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const componentsDir = path.resolve(__dirname, '../src/components')
const files = fs.readdirSync(componentsDir)
const lines = files
  .filter(name => fs.existsSync(path.join(componentsDir, name, 'index.ts')))
  .map(name => `export * from './${name}'`)
fs.writeFileSync(
  path.join(componentsDir, 'components.ts'),
  lines.join('\n')
)