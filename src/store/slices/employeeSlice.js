import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  EmployeeName:null,
  EmployeeStatus:null,
  JoiningDate:null,
  BirthDate:null,
  Skills:null,
  SalaryDetails:null,
  Address:null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployeeName: (state, action) => {
      state.EmployeeName = action.payload;
    },
    addEmployeeStatus: (state, action) => {
      state.EmployeeStatus = Number(action.payload);
    },
    addJoiningDate: (state, action) => {
      state.JoiningDate = action.payload;
    },
    addBirthDate: (state, action) => {
      state.BirthDate = action.payload;
    },
    addSkills: (state, action) => {
      state.Skills = action.payload;
    },
    addSalaryDetails: (state, action) => {
      state.SalaryDetails = Number(action.payload);
    },
    addAddress: (state, action) => {
      state.Address = action.payload;
    },
    clearAll: (state, action) => {
      state.EmployeeName = null;
      state.EmployeeStatus = null;
      state.JoiningDate = null;
      state.BirthDate = null;
      state.Skills = null;
      state.SalaryDetails = null;
      state.Address = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmployeeName,addEmployeeStatus,addJoiningDate,addBirthDate,addSkills,addSalaryDetails,addAddress,clearAll } = employeeSlice.actions;

export default employeeSlice.reducer;
