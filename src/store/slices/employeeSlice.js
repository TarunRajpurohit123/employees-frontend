import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  EmployeeName:null,
  EmployeeStatus:null,
  JoiningDate:"00-00-0000",
  BirthDate:"00-00-0000",
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
      state.Skills = null;
      state.SalaryDetails = null;
      state.Address = null;
    },
    updateEmployeeState: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmployeeName,addEmployeeStatus,updateEmployeeState,addJoiningDate,addBirthDate,addSkills,addSalaryDetails,addAddress,clearAll } = employeeSlice.actions;

export default employeeSlice.reducer;
