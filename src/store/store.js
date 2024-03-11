import { configureStore } from '@reduxjs/toolkit'
import { employeeSlice,drawerSlice,tableSlice } from './index'

export const store = configureStore({
  reducer: {employeeSlice,drawerSlice,tableSlice},
})