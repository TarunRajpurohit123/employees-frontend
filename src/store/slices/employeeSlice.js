import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = employeeSlice.actions

export default employeeSlice.reducer