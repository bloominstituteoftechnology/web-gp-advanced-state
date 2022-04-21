import React, { useContext } from 'react'
import { ColorContext } from '../contexts/colors'
import { EmojiContext } from '../contexts/emojis'
import { CountContext } from '../contexts/count'

export default function Todo({ todo, toggleStatus }) {
  const { pink } = useContext(ColorContext)
  const { checkmark } = useContext(EmojiContext)
  const { count, inc, dec } = useContext(CountContext)
  return (
    <div style={{ color: pink }} onClick={() => toggleStatus(todo.id)} className="todo">
      {todo.name}{todo.completed ? checkmark : ''} {count}
      <button onClick={inc}>increase</button>
    </div>
  )
}
