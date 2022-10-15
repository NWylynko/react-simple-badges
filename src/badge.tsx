import React from "react"
import type { ClassAttributes, ImgHTMLAttributes } from "react"
import { isHex } from "./isHex.js"
import { badgeSrc } from "./badgeSrc.js"

export type BadgeProps = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement> & {
    logoColor?: string
    label?: string
    backgroundColor?: string
  }

export function Badge(
  { name, logoColor, label, backgroundColor, ...rest }: BadgeProps & {
    name: string
    backgroundColor: string
  }
) {

  if (backgroundColor && !isHex(backgroundColor)) {
    throw new Error('background color isnt hex color eg. #ffffff')
  }

  return <img src={badgeSrc({ title: label || name, backgroundColor, logoColor, name })} alt={label || name} {...rest} />
}
