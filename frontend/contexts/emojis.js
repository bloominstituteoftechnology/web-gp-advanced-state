// 1 decide what data to teleport
// 2 pull in the create context helper
// 3 instantiate a context (and export it)
// 4 export default a provider
// 5 go to the top of the tree and USE the provider
// 6 find a component that wants to consume the data
import React, { createContext } from 'react'

const emoji = {
  checkmark: '🥰',
}

export const EmojiContext = createContext()

export default function EmojiProvider(props) {
  return (
    <EmojiContext.Provider value={emoji}>
      {props.children}
    </EmojiContext.Provider>
  )
}
