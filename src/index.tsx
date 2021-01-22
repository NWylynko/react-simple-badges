import * as React from 'react'
// import fetch from 'node-fetch'

const customProps = ['name', 'logoColor', 'label', 'backgroundColor']

const businessThemeColor = (name: string) =>
  encodeURI(
    `https://us-central1-business-primary-color.cloudfunctions.net/default?name=${name}`
  )

interface BadgeSrc {
  encodedName: string
  hex: string
  logoColor?: string
  name: string
}

const badgeSrc = ({ encodedName, hex, logoColor, name }: BadgeSrc) =>
  encodeURI(
    `https://img.shields.io/badge/${encodedName} -${hex}.svg?&style=for-the-badge&logo=${name}&logoColor=${
      logoColor || 'white'
    }`
  ).replace(/#/g, '%23')

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

  const [hex, setHex] = React.useState(backgroundColor)
  const [encodedName, setEncodedName] = React.useState(
    label || name.replace(/-/g, '--').replace(/_/g, '__').replace(/ /g, '_')
  )
  const [src, setSrc] = React.useState<string>()

  React.useEffect(() => {
    ;(async () => {
      if (hex === undefined) {
        setHex(`#${await (await fetch(businessThemeColor(name))).text()}`)
      }
    })()
  }, [hex])

  if (backgroundColor && !isHex(backgroundColor))
    throw new Error('background color isnt hex color eg. #ffffff')

  React.useEffect(() => {
    setEncodedName(
      label || name.replace(/-/g, '--').replace(/_/g, '__').replace(/ /g, '_')
    )
  }, [label, name])

  React.useEffect(() => {
    if (hex) {
      setSrc(badgeSrc({ encodedName, hex, logoColor, name }))
    }
  }, [encodedName, hex, logoColor, name])

  if (!src) {
    return null;
  }

  return <img src={src} alt={props.name} {...removeItems(props, customProps)} />
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
