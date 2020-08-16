# react-clean-badges

> React badges for your Profile and Projects.

using https://github.com/Ileriayo/markdown-badges

## Install

```bash
npm i react-clean-badges
```

```bash
yarn add react-clean-badges
```

## What is this Component library?

A set of Components that are auto generated from Ileriayo/markdown-badges list of badges from shields.io. A github action is run every 24 hours checking if the list has been updated and will automatically update the index.tsx with the new components and be published to npm with a new version number. Any props passed to the component get passed along to the img element in it so things like style can be applied easily. Components can either be used as ```<Badge.Nodejs />``` or ```<NodejsBadge />``` depending on how you want to import them (see the example).

## Usage

```tsx
import React from 'react'

import Badge, {ExpressjsBadge, DigitalOceanBadge, ReactBadge} from 'react-clean-badges'

const App = () => {
  return (
    <>
      <Badge.Nodejs style={{width: 200}} />
      <Badge.JavaScript />
      <Badge.TypeScript style={{borderRadius: 10}} />
      <Badge.React />
      <ReactBadge />
      <ExpressjsBadge style={{padding: 15}} />
      <DigitalOceanBadge />
    </>
  )
}

export default App
```
