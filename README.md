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

A Component that renders an image of a badge from shields.io using simpleicons.org list of icons. A github action is run every 24 hours checking if the list has been updated and will automatically update the Badge component with the new badges and be published to npm with a new version number. Any props passed to the component get passed along to the img element in it so things like style can be applied easily.


## Usage

<!-- add-file: ./example/src/App.jsx -->
<!-- markdown-code-runner
  {
    "dependencies": [
      "react-simple-badges"
    ]
  }
-->

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
