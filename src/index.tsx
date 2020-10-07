import * as React from 'react'
import badges from './data.json'

function Badge(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLImageElement> &
    React.ImgHTMLAttributes<HTMLImageElement> & {
      name: string
      logoColor?: string
      label?: string
      backgroundColor?: string
    }
) {
  const { name, logoColor, label, backgroundColor } = props
  const hex = '#' + badges[name]

  if (backgroundColor && !isHex(backgroundColor))
    throw new Error('background color isnt hex color eg. #ffffff')

  const encodedName =
    label || name.replace(/-/g, '--').replace(/_/g, '__').replace(/ /g, '_')

  const src = encodeURI(
    `https://img.shields.io/badge/${encodedName} -${
      backgroundColor || hex
    }.svg?&style=for-the-badge&logo=${name}&logoColor=${logoColor || 'white'}`
  ).replace(/#/g, '%23')

  const customProps = ['name', 'logoColor', 'label', 'backgroundColor']

  const imgProps = removeItems(props, customProps)

  return <img src={src} alt={props.name} {...imgProps} />
}

const isHex = (color: string): boolean => /^#[0-9A-Fa-f]{6}$/i.test(color)

const removeItems = (props: any, customProps: any) =>
  Object.keys(props).reduce((object, key) => {
    if (!customProps.includes(key)) {
      object[key] = props[key]
    }
    return object
  }, {})

export default Badge
