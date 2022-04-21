import React, { useContext } from 'react'
import { ColorContext } from '../contexts/colors'
import { EmojiContext } from '../contexts/emojis'

export default function Todo({ todo, toggleStatus }) {
  const { pink } = useContext(ColorContext)
  const { checkmark } = useContext(EmojiContext)
  return (
    <div style={{ color: pink }} onClick={() => toggleStatus(todo.id)} className="todo">
      {todo.name}{todo.completed ? checkmark : ''}
    </div>
  )
}
