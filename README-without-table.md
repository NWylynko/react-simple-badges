# react-clean-badges

> React badges for your Profile and Projects.

## Install

```bash
npm i react-clean-badges
```

```bash
yarn add react-clean-badges
```

## What is this Component library?

A set of Components that are auto generated from simpleicons.org list of badges from shields.io. A github action is run every 24 hours checking if the list has been updated and will automatically update the index.tsx with the new components and be published to npm with a new version number. Any props passed to the component get passed along to the img element in it so things like style can be applied easily.

## Usage

```tsx
import React from 'react'

import Badge from 'react-clean-badges'

const App = () => {
  return (
    <>
      <Badge name="node.js" style={{width: 200}} />
      <Badge name="YouTube Gaming" />
      <Badge name="Valve" />
      <Badge name="Tesla" />
    </>
  )
}

export default App
```
