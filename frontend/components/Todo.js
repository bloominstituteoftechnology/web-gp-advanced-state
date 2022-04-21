import React, { useContext } from 'react'
import { ColorContext } from '../contexts/colors'

export default function Todo({ todo, toggleStatus }) {
  const { pink } = useContext(ColorContext)
  return (
    <div style={{ color: pink }} onClick={() => toggleStatus(todo.id)} className="todo">
      {todo.name}{todo.completed ? ' ✔️' : ''}
    </div>
  )
}
