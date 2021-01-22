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
      } else if (Equal(oldData, newData)) {
        // exit if the file hasnt changed
        console.log('file hasnt changed')
        process.exit(1)
      } else {
        // write the new file for later and continue
        console.log('file has changed')
        saveData(newData)
      }
    })
  })

function saveData(newData) {
  const data = newData.map((item) => {
    return { name: item.title, hex: item.hex }
  })
  fs.writeFileSync('data.json', JSON.stringify(newData))
  fs.writeFileSync('data.min.json', JSON.stringify(data)) // for the badges.md generation
}

function Equal(object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2)
}
