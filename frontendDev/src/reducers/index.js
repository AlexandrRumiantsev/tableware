import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import api from './api'

export default combineReducers({
  page,
  user,
  api
})