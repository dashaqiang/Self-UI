import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pluginsDir = path.resolve(__dirname, '../src/plugins')
// const files = fs.readdirSync(pluginsDir)
// const lines = files
//   .filter(name => name.endsWith('.ts') && name !== 'index.ts')
//   // .map(name => `export { default as ${name.replace('.ts', '')} } from './${name.replace('.ts', '')}'`)
//   .map(name => `export * from './${name.replace('.ts', '')}'`)
const files = fs.readdirSync(pluginsDir)
  .filter(name => name.endsWith('.ts') && name !== 'index.ts')

const lines = []
for (const name of files) {
  const base = name.replace('.ts', '')
  lines.push(`export { default as ${base} } from './${base}'`)
  lines.push(`export * from './${base}'`)
}

fs.writeFileSync(
  path.join(pluginsDir, 'index.ts'),
  lines.join('\n')
)