// 1 decide what data to teleport
// 2 pull in the create context helper
// 3 instantiate a context (and export it)
// 4 export default a provider
// 5 go to the top of the tree and USE the provider
// 6 find a component that wants to consume the data

import React, { createContext } from 'react'

const colors = {
  red: 'red',
  pink: 'pink',
  black: 'black',
}

// 
export const ColorContext = createContext()


// this fellow is used to wrap the part of the tree that wants the data
export default function ColorProvider(props) {
  return (
    <ColorContext.Provider value={colors}>
      {props.children}
    </ColorContext.Provider>
  )
}
