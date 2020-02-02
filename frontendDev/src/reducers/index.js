import { combineReducers } from 'redux'
import page from './page'
import menu from './menu'
import api from './api'

export default combineReducers({
  page,
  menu,
  api
})