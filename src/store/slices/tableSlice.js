import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:[]
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addTableData : (state,action) => {
      state.data = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {addTableData} = tableSlice.actions;

export default tableSlice.reducer;
