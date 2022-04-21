import * as types from './action-types'
import axios from 'axios'

// onClick = () => dispatch({ type: 'foo' paload: 123 })

export const changeInput = ({ name, value }) => {
  return {
    type: 'INPUT-CHANGE',
    payload: { name, value },
  }
}
export const toggleDisplayCompleteds = () => {
  return {
    type: types.TOGGLE_DISPLAY_COMPLETEDS,
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
export const postNewTodoToApi = name => dispatch => {
  axios.post('http://localhost:9000/api/todos', { name })
    .then(res => {
      // dispatch(fetchTodosFromApi()) // this works but is a bit wasteful
      const newlyCreatedTodo = res.data.data
      dispatch({ type: types.ADD_NEW_TODO, payload: newlyCreatedTodo })
    })
    .catch(err => {
      debugger
    })
}
export const toggleTodoCompletion = id => dispatch => {
  axios.patch(`http://localhost:9000/api/todos/${id}`)
    .then(res => {
      dispatch({ type: types.TOGGLE_TODO_COMPLETION, payload: id })
    })
    .catch(err => {
      debugger
    })
}
