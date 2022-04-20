import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

class TodoList extends React.Component {
  render() {
    const { todos, displayCompletedTodos, toggleTodoCompletion } = this.props
    return (
      <div id="todos">
        <h2>Todos:</h2>
        {
          todos.reduce((acc, td) => {
            if (displayCompletedTodos || !td.completed) {
              return acc.concat(
                <Todo
                  todo={td}
                  key={td.id}
                  toggleStatus={toggleTodoCompletion}
                />
              )
            }
            return acc
          }, [])
        }
      </div>
    )
  }
}
export default connect(st => st, actions)(TodoList)
