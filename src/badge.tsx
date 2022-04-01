import React from "react"
import type { ClassAttributes, ImgHTMLAttributes } from "react"

const customProps = ['name', 'logoColor', 'label', 'backgroundColor']

interface BadgeSrc {
  title: string
  backgroundColor: string
  logoColor?: string
  name: string
}

const badgeSrc = ({ title, backgroundColor, logoColor, name }: BadgeSrc) => {

  const encodedTitle = title.replace(/-/g, '--').replace(/_/g, '__').replace(/ /g, '_')

  return encodeURI(
    `https://img.shields.io/badge/${encodedTitle} -${backgroundColor}.svg?&style=for-the-badge&logo=${name}&logoColor=${logoColor || 'white'
    }`
  ).replace(/#/g, '%23')
}

export type BadgeProps = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement> & {
    logoColor?: string
    label?: string
    backgroundColor: string
  }

export function Badge(
  props: BadgeProps & {
    name: string
  }
) {
  const { name, logoColor, label, backgroundColor } = props

  if (backgroundColor && !isHex(backgroundColor))
    throw new Error('background color isnt hex color eg. #ffffff')

  return <img src={badgeSrc({ title: label || name, backgroundColor, logoColor, name })} alt={label || name} {...removeItems(props, customProps)} />
}

const isHex = (color: string): boolean => /^#[0-9A-Fa-f]{6}$/i.test(color)

const removeItems = (props: any, customProps: any) =>
  Object.keys(props).reduce((object, key) => {
    if (!customProps.includes(key)) {
      object[key] = props[key]
    }
    return object
  }, {})
