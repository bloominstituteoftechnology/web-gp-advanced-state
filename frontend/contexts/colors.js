// 1 decide what data to teleport
// 2 pull in the create context helper
// 3 i

import React, { createContext } from 'react'

const colors = {
  red: 'red',
  pink: 'pink',
  black: 'black',
}

export const ColorContext = createContext()

export default function ColorProvider(props) {
  return (
    <ColorContext.Provider value={colors}>
      {props.children}
    </ColorContext.Provider>
  )
}
