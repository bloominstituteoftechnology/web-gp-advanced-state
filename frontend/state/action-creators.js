import * as types from './action-types'
import { getId } from './helpers'
import axios from 'axios'

export const changeInput = ({ name, value }) => {
  return {
    type: types.INPUT_CHANGE,
    payload: { name, value },
  }
}
export const toggleDisplayCompleteds = () => {
  return {
    type: types.TOGGLE_DISPLAY_COMPLETEDS,
  }
}
export const addTodo = name => {
  return {
    type: types.ADD_NEW_TODO,
    payload: { id: getId(), completed: false, name, },
  }
}
export const toggleTodoCompletion = todoId => {
  return {
    type: types.TOGGLE_TODO_COMPLETION,
    payload: todoId,
  }
}
export const fetchTodosFromApi = () => dispatch => {
  axios.get('http://')
}
