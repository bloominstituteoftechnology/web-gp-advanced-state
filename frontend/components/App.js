import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0

const getId = () => ++id

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]

const initialState = {
  todos: initialTodos,
  shouldShowCompleteds: true,
  nameInput: '',
}

export default function App() {
  const [state, setState] = useState(initialState)

  const onSubmit = evt => {
    evt.preventDefault()
    setState({
      ...state,
      todos: state.todos.concat({
        id: getId(),
        name: state.nameInput,
        completed: false,
      }),
      nameInput: ''
    })
  }

  const onChange = evt => {
    const { value } = evt.target
    setState({
      ...state,
      nameInput: value,
    })
  }

  const toggleShouldShow = () => {
    setState({
      ...state,
      shouldShowCompleteds: !state.shouldShowCompleteds
    })
  }

  const toggleStatus = id => () => {
    setState({
      ...state,
      todos: state.todos.map(td => {
        return td.id == id
          ? { ...td, completed: !td.completed }
          : td
      })
    })
  }
  return (
    <div>
      <TodoList
        todos={state.todos}
        displayCompleteds={state.shouldShowCompleteds}
        toggleStatus={toggleStatus}
      />
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        toggleShouldShow={toggleShouldShow}
        displayCompleteds={state.shouldShowCompleteds}
        disabled={!state.nameInput.length}
        value={state.nameInput}
      />
    </div>
  )
}
