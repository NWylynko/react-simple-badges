const fetch = require('node-fetch')
const fs = require('fs')

const url =
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/_data/simple-icons.json'

fetch(url)
  .then((res) => res.json())
  .then((json) => json.icons)
  .then((newData) => {
    fs.readFile('data.json', 'utf8', (err, oldData) => {
      oldData = JSON.parse(oldData)
      if (err) {
        // if there is an error with the old file just replace it and continue
        console.error(err)
        saveData(newData)
        bumpVersion()
      } else if (oldData === newData) {
        // exit if the file hasnt changed
        console.log('file hasnt changed')
        process.exit(1)
      } else {
        // write the new file for later and continue
        console.log('file has changed')
        saveData(newData)
        bumpVersion()
      }
    })
  })

function saveData(newData) {
  const data = newData.map((item) => {
    return { name: item.title, hex: item.hex }
  })
  const dataObject = {}
  newData.forEach((item) => {
    dataObject[item.title] = item.hex
  })
  fs.writeFileSync('data.json', JSON.stringify(newData))
  fs.writeFileSync('data.min.json', JSON.stringify(data))
  fs.writeFileSync('../src/data.json', JSON.stringify(dataObject))
}

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
