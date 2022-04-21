// 1 decide what data to teleport
// 2 pull in the create context helper
// 3 instantiate a context (and export it)
// 4 export default a provider
// 5 go to the top of the tree and USE the provider

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
