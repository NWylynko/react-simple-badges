const puppeteer = require('puppeteer')

const { spawn } = require('child_process')
const web = spawn('yarn', ['start'], { cwd: '../example', shell: true })

web.stdout.on('data', async (data) => {
  if (data.includes('Compiled successfully!')) {
    console.log('Compiled successfully!')
    // await run()
    run()
    // web.kill()
  } else if (data.includes('Failed to compile.')) {
    console.log('Failed to compile.')
    process.exit(1)
  } else if (data.includes('Starting the development server...')) {
    console.log('Starting')
  }
})

web.stderr.on('data', (data) => {
  console.error(`error: ${data}`)
})

web.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})

const run = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3000')

  const dimensions = await page.evaluate(() => {
    return {
      // plus 16 for the 8px margin from the body tag
      width: document.getElementById('root').offsetWidth + 16,
      height: document.getElementById('root').offsetHeight + 16
    }
  })

  console.log('Dimensions:', dimensions)

  await page.screenshot({
    path: 'example.png',
    clip: { x: 0, y: 0, ...dimensions }
  })
  console.log('taken screenshot')
  process.exit()

  // await browser.close()

}

// run()
