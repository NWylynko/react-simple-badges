import React from "react"
import type { ClassAttributes, ImgHTMLAttributes } from "react"
import { isHex } from "./isHex"
import { badgeSrc } from "./badgeSrc"
import { type IconNames, icons } from "./icons"

export type BadgeProps = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement> & {
    logoColor?: `#${string}`
    label?: string
    backgroundColor?: `#${string}`
    name: IconNames
  }

export async function Badge({ name, logoColor, label, backgroundColor, ...rest }: BadgeProps) {

  let src: string;

  // if the user defines one, we check that its valid
  if (backgroundColor) {
    if (!isHex(backgroundColor)) {
      throw new Error('background color isnt hex color eg. #ffffff')
    } else {
      // if its valid we use it
      src = badgeSrc({ title: label ?? name, backgroundColor, logoColor, name })
    }
  } else {
    // if they don't define one, we get the default for them
    const icon = icons.find((icon) => icon.label === name)
    if (!icon) {
      throw new Error(`Cannot find the hex for that badge ${name}`)
    }
    const { hex } = icon
    src = badgeSrc({ title: label ?? name, backgroundColor: hex, logoColor, name })
  }

  return <img src={src} alt={label ?? name} {...rest} />
}
