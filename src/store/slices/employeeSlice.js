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
      state.EmployeeStatus = action.payload;
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
      state.SalaryDetails = action.payload;
    },
    addAddress: (state, action) => {
      state.Address = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmployeeName,addEmployeeStatus,addJoiningDate,addBirthDate,addSkills,addSalaryDetails,addAddress } = employeeSlice.actions;

export default employeeSlice.reducer;
