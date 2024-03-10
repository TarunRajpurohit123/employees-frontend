import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open:true
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.open = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleDrawer} = drawerSlice.actions;

export default drawerSlice.reducer;
