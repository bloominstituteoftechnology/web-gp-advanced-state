import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Form(props) {
  const {
    form,
    displayCompletedTodos,
    toggleDisplayCompleteds,
    changeInput,
    addTodo,
  } = props

  const onChange = evt => {
    const { name, value } = evt.target
    changeInput({ name, value })
  }
  const onSubmit = evt => {
    evt.preventDefault()
    addTodo(form.todoName)
  }
  return (
    <>
      <form id="todoForm" onSubmit={onSubmit}>
        <input
          value={form.todoName}
          onChange={onChange}
          placeholder="Type todo"
          name="todoName"
          type="text"
        />
        <input type="submit" disabled={!form.todoName.length} />
      </form>

      <button onClick={toggleDisplayCompleteds}>
        {displayCompletedTodos ? 'Hide' : 'Show'} Completed
      </button>
    </>
  )
}
export default connect(st => st, actions)(Form)
