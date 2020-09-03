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

## What is this Component?

A Component that renders an image of a badge from shields.io using simpleicons.org list of icons. A github action is run every 24 hours checking if the list has been updated and will automatically update the Badge component with the new badges and be published to npm with a new version number. Any props passed to the component get passed along to the img element in it so things like style can be applied easily.


## Usage

<!-- add-file: ./example/src/App.jsx -->
``` jsx markdown-add-files
import React from 'react'

import Badge from 'react-simple-badges'

const App = () => {
  return (
    <>
      <Badge name="node.js" style={{width: 200}} logoColor="#eb4034" />
      <Badge name="YouTube Gaming" label="Youtube" />
      <Badge name="Valve" label="Steamy Boi" style={{padding: 10}} />
      <Badge name="Tesla" backgroundColor="#32a853" />
    </>
  )
}

export default App

```
<!-- markdown-code-runner
  {
    "dependencies": [
      "react-simple-badges"
    ]
  }
-->

<!-- markdown-code-runner image-start -->

![rendered jsx](./README.0.png)

<!-- markdown-code-runner image-end -->

[Example project on stackblitz.com](https://stackblitz.com/edit/react-ejp4ec?embed=1&file=src/App.js&hideExplorer=1&hideNavigation=1&view=preview)

## props for `<Badge />`

### `<Badge name="" />` required : string
The name of the badge your trying to use
eg. "Instagram"
### `<Badge label="" />` optional : string
A custom string to replace the word on the badge
eg. "Insta"
### `<Badge logoColor="" />` optional : string : hex color
Replaces the color of the logo that default to white
eg. "#ffb900"
### `<Badge backgroundColor="" />` optional : string : hex color
Replaces the color of the background of the badge
eg. "#00e1ff"
