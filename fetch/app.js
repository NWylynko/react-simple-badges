const fs = require('fs')
const { Extractor } = require('markdown-tables-to-json')

let File = "import * as React from 'react'\n\n"
let Badge = 'const Badge: Badge = {\n'
let Interface = 'export interface Badge {\n'
let componentExports = '\n'

fs.readFile('markdown.md', 'utf8', (err, data) => {
  if (err) {
    throw new Error(err)
  }
  const body = Extractor.extractAllObjects(data)
  body.forEach((list) => {
    Object.keys(list).map((item) => {
      const functionName = UpperCaseFirst(
        item
          .replace(/[. ]/g, '')
          .replace(/[+]/g, 'plus')
          .replace(/[#]/g, 'sharp')
      )
      Badge += `\t${functionName}: (props) => ${list[item].Name.replace(
        '/>',
        ' {...props} />'
      )},\n`
      Interface += `\t${functionName}: (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => JSX.Element;\n`
      componentExports += `export const ${functionName}Badge = Badge.${functionName}\n`
    })
  })
  Badge += '}\n'
  Interface += '}\n\n'
  componentExports += '\n'
  File += Interface
  File += Badge
  File += componentExports
  File += 'export default Badge'

  fs.writeFileSync('../src/index.tsx', File)
})

function UpperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
