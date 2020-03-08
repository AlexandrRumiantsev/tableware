import { combineReducers } from 'redux'
import page from './page'
import menu from './menu'
import api from './api'
import admin from './admin'

export default combineReducers({
  page,
  menu,
  api,
  admin
})