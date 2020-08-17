# react-simple-badges

<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>

React badges for your Profile and Projects.

[![NPM](https://nodei.co/npm/react-simple-badges.png)](https://www.npmjs.com/package/react-simple-badges)

## Install

```bash
npm i react-simple-badges
```

```bash
yarn add react-simple-badges
```

## What is this Component library?

A set of Components that are auto generated from simpleicons.org list of icons using shields.io badges. A github action is run every 24 hours checking if the list has been updated and will automatically update the Badge component with the new badges and be published to npm with a new version number. Any props passed to the component get passed along to the img element in it so things like style can be applied easily.

## Usage

```tsx
import React from 'react'

import Badge from 'react-simple-badges'

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
[Example project on stackblitz.com](https://stackblitz.com/edit/react-ejp4ec?embed=1&file=src/App.js&hideExplorer=1&hideNavigation=1&view=preview)

