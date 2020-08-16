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

## License

MIT © [NWylynko](https://github.com/NWylynko)
