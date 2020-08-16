const fs = require('fs')
const { Extractor } = require('markdown-tables-to-json')
const tablemark = require('tablemark')
const { convertToFunctionName } = require('./app')

fs.readFile('markdown.md', 'utf8', (err, data) => {
  if (err) throw new Error(err)

  let json = Extractor.extractAllObjects(data)
  json = json.reduce((previous, current) => {
    return {
      ...previous,
      ...current
    }
  }, {})
  // console.log(json)
  const test = Object.keys(json).map((item) => {
    return {
      Name: item,
      Badge: json[item].Name,
      JSX: `<Badge.${convertToFunctionName(item)} />`
    }
  })
  // console.log(test)
  const md =
    '\n\n### Badges\n\n' + tablemark(test).replace('Jsx', 'JSX') + '\n\n'
  fs.readFile('../README-without-table.md', 'utf8', (err, data) => {
    if (err) throw new Error(err)
    fs.writeFileSync('../README.md', data + md)
  })
})
