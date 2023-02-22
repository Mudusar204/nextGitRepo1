import { configureStore } from '@reduxjs/toolkit'
import reduxFirebaseTodoSlice from './reduxFirebaseTodoSlice'
import reduxTodoSlice from './reduxTodoSlice'
import authSlice from './authSlice'
const store= configureStore({
  reducer: {
    reduxFirebaseTodoSlice,
    reduxTodoSlice,
    authSlice,
  },
})
export default store