import React, { useContext } from 'react'
import { ColorContext } from '../contexts/colors'

export default function Todo({ todo, toggleStatus }) {
  const colors = useContext(ColorContext)
  return (
    <div onClick={() => toggleStatus(todo.id)} className="todo">
      {todo.name}{todo.completed ? ' ✔️' : ''}
    </div>
  )
}
