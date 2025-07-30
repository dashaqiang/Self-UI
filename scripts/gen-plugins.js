import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pluginsDir = path.resolve(__dirname, '../src/plugins')

// Read all subdirectories in plugins directory
const dirs = fs.readdirSync(pluginsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

const lines = []
for (const dir of dirs) {
  lines.push(`export { default as ${dir} } from './${dir}'`)
  lines.push(`export * from './${dir}'`)
}

fs.writeFileSync(
  path.join(pluginsDir, 'index.ts'),
  lines.join('\n')
)