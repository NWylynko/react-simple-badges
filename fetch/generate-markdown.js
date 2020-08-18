const fs = require('fs')
const util = require('util')
const tablemark = require('tablemark')

const readFile = util.promisify(fs.readFile)

async function generate() {
  const json = JSON.parse(await readFile('data.min.json', 'utf8'))

  const badges = json.map((item) => {
    const encodedName = item.name
      .replace(/-/g, '--')
      .replace(/_/g, '__')
      .replace(/ /g, '_')
    const src = encodeURI(
      `https://img.shields.io/badge/${encodedName} -#${item.hex}.svg?&style=for-the-badge&logo=${item.name}&logoColor=white`
    ).replace('#', '%23')
    return {
      Name: item.name,
      Badge: `<img src="${src}"/>`,
      JSX: '```<Badge name="' + item.name + '" />```'
    }
  })

  const badgesMD = '\n### Badges\n\n' + tablemark(badges).replace('Jsx', 'JSX')

  const TSX = await readFile('../example/src/App.tsx', 'utf8')
  const sampleTSX = '```JSX\n' + TSX + '```'

  const template = await readFile('../README-template.md', 'utf8')

  const newMD = template
    .replace('###badges###', badgesMD)
    .replace('###sample###', sampleTSX)
  fs.writeFileSync('../README.md', newMD)
}

generate()
