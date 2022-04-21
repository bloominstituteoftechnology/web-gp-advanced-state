import React, { useState, createContext } from 'react'

export const CountContext = createContext()

export default function CountProvider(props) {
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)
  const dec = () => setCount(count - 1)

  
}
