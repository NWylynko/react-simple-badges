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
