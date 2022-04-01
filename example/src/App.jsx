import React from 'react'

import NodeJs from "react-simple-badges/dist/badges/Nodejs";
import YouTubeGaming from "react-simple-badges/dist/badges/YouTubeGaming";
import Valve from "react-simple-badges/dist/badges/Valve";
import Tesla from "react-simple-badges/dist/badges/Tesla";

const App = () => {
  return (
    <>
      <NodeJs style={{width: 200}} logoColor="#eb4034" />
      <YouTubeGaming label="Youtube" />
      <Valve label="Steamy Boi" style={{padding: 10}} />
      <Tesla backgroundColor="#32a853" />
    </>
  )
}

export default App
