import { combineReducers } from 'redux'
import todos from './todos.js'
import visibilityFilter from './visibilityFilter.js'
import login from './login.js'

export default combineReducers({
  todos,
  visibilityFilter,
  login,
})