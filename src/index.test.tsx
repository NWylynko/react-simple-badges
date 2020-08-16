import React from 'react'
import ReactDOM from 'react-dom'
import Badge from './index'

Object.keys(Badge).map((item) => {
  it(`renders ${item} without crashing`, () => {
    const div = document.createElement('div')
    const TestElement = Badge[item]
    ReactDOM.render(<TestElement />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
