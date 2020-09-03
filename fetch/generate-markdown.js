const fs = require('fs')
const util = require('util')
const MDTableGen = require('tablemark')

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

  const badgesMD = MDTableGen(badges).replace('Jsx', 'JSX')

  fs.writeFileSync('../badges.md', badgesMD)
}

generate()
