import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open:false,
  open2:false,
  drawerFormDisable:false,
  drawerStatus:"CREATE",
  editEmployee:"",
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.open = action.payload;
    },
    toggleDrawer2: (state, action) => {
      state.open2 = action.payload;
    },
    diableFormFunc: (state, action) => {
      state.drawerFormDisable = action.payload;
    },
    addDrawerStatus : (state,action) => {
      state.drawerStatus = action.payload
    },
    addEditEmployee : (state,action) => {
      state.editEmployee = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {toggleDrawer,diableFormFunc,addDrawerStatus,addEditEmployee,toggleDrawer2} = drawerSlice.actions;

export default drawerSlice.reducer;
