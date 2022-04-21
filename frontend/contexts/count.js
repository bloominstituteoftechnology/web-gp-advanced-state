import React, { useState, createContext } from 'react'

export const CountContext = createContext()

export default function CountProvider(props) {
  let [count, setCount] = useState(0)
  const inc = () => setCount(count => count + 1)
  const dec = () => setCount(count - 1)

  return (
    <CountContext.Provider value={{ count, inc, dec }}>
      {props.children}
    </CountContext.Provider>
  )
}
