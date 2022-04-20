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
export const toggleTodoCompletion = todoId => {
  return {
    type: types.TOGGLE_TODO_COMPLETION,
    payload: todoId,
  }
}
export const fetchTodosFromApi = () => dispatch => {
  axios.get('http://localhost:9000/api/todos')
    .then(res => {
      const allTodosFromAPI = res.data.data
      dispatch({ type: types.POPULATE_ALL_TODOS, payload: allTodosFromAPI })
    })
    .catch(err => {
      debugger
    })
}
// the old one
// export const addTodo = name => {
//   return {
//     type: types.ADD_NEW_TODO,
//     payload: { id: getId(), completed: false, name, },
//   }
// }
export const postNewTodoToApi = name => dispatch => {
  axios.post('http://localhost:9000/api/todos', { name: name })
}
