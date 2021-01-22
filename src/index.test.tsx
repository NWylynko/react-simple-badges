import { enableFetchMocks } from 'jest-fetch-mock'
import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Badge from './index'
enableFetchMocks()

let container: HTMLDivElement | null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  if (container !== null) {
    document.body.removeChild(container)
    container = null
  }
})

it(`renders "Node.js" without crashing`, async (done) => {
  const mockBackgroundColor = 'ffffff'

  global.fetch.mockResponseOnce(mockBackgroundColor)

  await act(async () => {
    ReactDOM.render(<Badge name='Node.js' />, container)
  })

  setTimeout(() => {
    if (container) {
      const img: HTMLImageElement = container.children[0]
      expect(img.src).toBe(
        `https://img.shields.io/badge/Node.js%20-%23${mockBackgroundColor}.svg?&style=for-the-badge&logo=Node.js&logoColor=white`
      )
      expect(img.alt).toBe('Node.js')
      done()
    }
  }, 1000)
})
