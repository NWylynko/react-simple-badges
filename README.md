# react-simple-badges

<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>

React badges for your Profile and Projects.

[Find a complete list of over 1400 badges in badges.md](https://github.com/NWylynko/react-simple-badges/blob/master/badges.md)

[![NPM](https://nodei.co/npm/react-simple-badges.png)](https://www.npmjs.com/package/react-simple-badges)

## Install

```bash
npm i react-simple-badges
```

```bash
yarn add react-simple-badges
```

## What is this Component?

A Component that renders an image of a badge from shields.io using simpleicons.org list of icons. shields.io doesn't store the primary accent colour of the icon though, simple icons does in a json file. but downloading the whole file (~40kb gziped) is bad for the loading times of a website. so the json file is stored in a [firebase function](https://github.com/NWylynko/business-primary-color) which the component sends a request too with the name of the badge your trying to display. A github action is run every 24 hours checking if the list has been updated and will automatically update the firebase function with the new badges and be published to firebase. Any props passed to the component get passed along to the img element in it so things like style can be applied easily.


## Usage

<!-- add-file: ./example/src/App.jsx -->

``` jsx markdown-add-files
import React from 'react'

import NodeJs from "react-simple-badges/Nodejs";
import YouTubeGaming from "react-simple-badges/YouTubeGaming";
import Valve from "react-simple-badges/Valve";
import Tesla from "react-simple-badges/Tesla";

const App = () => {
  return (
    <>
      <NodeJs style={{width: 200}} logoColor="#eb4034" />
      <YouTubeGaming label="Youtube" />
      <Valve label="Value Please fix" style={{padding: 10}} />
      <Tesla backgroundColor="#32a853" />
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

[Example project on stackblitz.com](https://stackblitz.com/edit/react-ts-jdouze?file=package.json,App.tsx,style.css,index.tsx)

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

## most popular badges

![most popular badges graph](https://us-central1-business-primary-color.cloudfunctions.net/graph)
