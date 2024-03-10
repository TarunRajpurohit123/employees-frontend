import { configureStore } from '@reduxjs/toolkit'
import { employeeSlice,drawerSlice } from './index'

export const store = configureStore({
  reducer: {employeeSlice,drawerSlice},
})