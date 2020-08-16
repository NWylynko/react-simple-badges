const fetch = require('node-fetch')
const fs = require('fs')

const url =
  'https://raw.githubusercontent.com/Ileriayo/markdown-badges/master/README.md'

fetch(url)
  .then((res) => res.text())
  .then((file) => {
    fs.readFile('markdown.md', 'utf8', (err, data) => {
      if (err) {
        // if there is an error with the old file just replace it and continue
        console.error(err)
        fs.writeFileSync('markdown.md', file)
        bumpVersion()
      } else if (data === file) {
        // exit if the file hasnt changed
        console.log('file hasnt changed')
        process.exit(1)
      } else {
        // write the new file for later and continue
        console.log('file has changed')
        fs.writeFileSync('markdown.md', file)
        bumpVersion()
      }
    })
  })

function bumpVersion() {
  fs.readFile('../package.json', 'utf8', (err, data) => {
    if (err) {
      throw new Error(err)
    }

    const package = JSON.parse(data)
    const version = package.version
      .split('.')
      .map((item) => parseInt(item || 0))
    version[2] += 1
    package.version = version.join('.')
    fs.writeFileSync('../package.json', JSON.stringify(package, null, '\t'))
  })
}
