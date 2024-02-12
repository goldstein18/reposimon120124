import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './slices/index'

export default configureStore({
  reducer: {combineReducers}
})