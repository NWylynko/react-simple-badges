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

```bash
bun add react-simple-badges
```

## What is this Component?

A Component that renders an image of a badge from shields.io using simpleicons.org list of icons. Every 24 hours a Github action is run to check for new icons. If their is a new one a new npm module version is released with it. This module is intended to be used as a react server component. Using the new async component. This means it can import the large icons list to get the background color you need but without increasing the end users page load time. But this does mean you need a framework that supports server components and react 18.2.0 or later.

## Usage

``` jsx
import { Badge } from "react-simple-badges"

export default async function HomePage() {
  return (
    <>
      <Badge name="Node.js" style={{width: 200}} logoColor="#eb4034" />
      <Badge name="YouTube Gaming" label="Youtube" />
      <Badge name="Valve" label="Value Please fix" style={{padding: 10}} />
      <Badge name="Tesla" backgroundColor="#32a853" />
    </>
  )
}
```

[Example project on stackblitz.com](https://stackblitz.com/edit/nextjs-mvwvlz?file=app%2Fpage.tsx,app%2Flayout.tsx)

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
