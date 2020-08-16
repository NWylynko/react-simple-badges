const fs = require('fs')
const tablemark = require('tablemark')

fs.readFile('data.min.json', 'utf8', (err, data) => {
  if (err) throw new Error(err)

  const json = JSON.parse(data)
  // console.log(json)
  const test = json.map((item) => {
    const src = encodeURI(
      `https://img.shields.io/badge/${item.name} -#${item.hex}.svg?&style=for-the-badge&logo=${item.name}&logoColor=white`
    ).replace('#', '%23')
    return {
      Name: item.name,
      Badge: `<img src="${src}"/>`,
      JSX: '```<Badge name="' + item.name + '" />```'
    }
  })

  const md =
    '\n\n### Badges\n\n' + tablemark(test).replace('Jsx', 'JSX') + '\n\n'

  fs.readFile('../README-without-table.md', 'utf8', (err, data) => {
    if (err) throw new Error(err)
    fs.writeFileSync('../README.md', data + md)
  })
})
