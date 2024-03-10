import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open:false,
  drawerFormDisable:false
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.open = action.payload;
    },
    diableFormFunc: (state, action) => {
      state.drawerFormDisable = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleDrawer,diableFormFunc} = drawerSlice.actions;

export default drawerSlice.reducer;
