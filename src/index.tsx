import * as React from 'react'
import badges from './data.json'

function Badge(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLImageElement> &
    React.ImgHTMLAttributes<HTMLImageElement> & { name: string }
) {
  const hex = badges[props.name]
  const encodedName = props.name
    .replace(/-/g, '--')
    .replace(/_/g, '__')
    .replace(/ /g, '_')
  const src = encodeURI(
    `https://img.shields.io/badge/${encodedName} -#${hex}.svg?&style=for-the-badge&logo=${props.name}&logoColor=white`
  ).replace('#', '%23')
  return <img src={src} alt={props.name} {...props} />
}

export default Badge
