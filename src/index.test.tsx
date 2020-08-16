import React from 'react'
import ReactDOM from 'react-dom'
import Badge from './index'
import badges from '../fetch/data.min.json'

badges.forEach((item: { name: string; hex: string }) => {
  it(`renders ${item.name} without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<Badge name={item.name} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
