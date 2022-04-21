import React, { useContext } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'
import { CountContext } from '../contexts/count'

function Form(props) {
  const {
    // states
    form,
    displayCompletedTodos,
    // action creators
    toggleDisplayCompleteds,
    changeInput,
    postNewTodoToApi,
    // info derived from state
    disabled,
  } = props
  const { count } = useContext(CountContext)

  const onChange = evt => {
    const { name, value } = evt.target
    changeInput({ name, value })
  }
  const onSubmit = evt => {
    evt.preventDefault()
    postNewTodoToApi(form.todoName)
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
        <input type="submit" disabled={disabled} />
      </form>

      <button onClick={toggleDisplayCompleteds}>
        {displayCompletedTodos ? 'Hide' : 'Show'} Completed
      </button>
    </>
  )
}
const mapStateToProps = state => {
  return {
    form: state.form,
    displayCompletedTodos: state.displayCompletedTodos,
    disabled: !state.form.todoName.length,
  }
}
export default connect(mapStateToProps, actions)(Form)
