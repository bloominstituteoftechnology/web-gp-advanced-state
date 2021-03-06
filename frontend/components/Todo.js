import React from 'react'

export default function Todo({ todo, toggleStatus }) {
  return (
    <div onClick={() => toggleStatus(todo.id)} className="todo">
      {todo.name}{todo.completed ? ' ✔️' : ''}
    </div>
  )
}
