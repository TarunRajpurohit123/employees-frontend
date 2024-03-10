import { configureStore } from '@reduxjs/toolkit'
import { employeeSlice } from './index'

export const store = configureStore({
  reducer: {employeeSlice},
})