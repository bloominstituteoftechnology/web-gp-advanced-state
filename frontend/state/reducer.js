import { combineReducers } from 'redux'
import { getId } from './helpers'
import * as types from './action-types'

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]
function todos(todosStateSlice = initialTodos, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      return todosStateSlice.concat(action.payload)
    case types.TOGGLE_TODO_COMPLETION:
      return todosStateSlice.map(todo => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      })
    default:
      return todosStateSlice
  }
}

const initialForm = {
  todoName: '',
}

function form(formStateSlice = initialForm, action) {
  switch (action.type) {
    case types.INPUT_CHANGE: {
      const { name, value } = action.payload
      return { ...formStateSlice, [name]: value }
    }
    case types.ADD_NEW_TODO:
      return initialForm
    default:
      return formStateSlice
  }
}

function displayCompletedTodos(displayCompletedsStateSlice = true, action) {
  switch (action.type) {
    case types.TOGGLE_DISPLAY_COMPLETEDS:
      return !displayCompletedsStateSlice
    default:
      return displayCompletedsStateSlice
  }
}
export default combineReducers({
  todos,
  form,
  displayCompletedTodos,
})
