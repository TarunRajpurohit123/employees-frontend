import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addDrawerStatus, diableFormFunc, toggleDrawer, toggleDrawer2 } from '../../store/slices/drawerSlice';
import { updateEmployeeState } from '../../store/slices/employeeSlice';
const EDrawer = ({label,children,btnStyles,heading,isOpen,module}) => {
  const dispatch = useDispatch();
  const showDrawer = () => {
    module=="form"?dispatch(toggleDrawer(true)):dispatch(toggleDrawer2(true))
  };
  const onClose = () => {
    module=="form"?dispatch(toggleDrawer(false)):dispatch(toggleDrawer2(false))
    dispatch(diableFormFunc(false))
    dispatch(addDrawerStatus("CREATE"));
    dispatch(updateEmployeeState({
      EmployeeName:null,
      EmployeeStatus:null,
      JoiningDate:"00-00-0000",
      BirthDate:"00-00-0000",
      Skills:null,
      SalaryDetails:null,
      Address:null,
    }));
  };
  return (
    <>
      <Button style={btnStyles} type="primary" onClick={showDrawer}>
        {label}
      </Button>
      <Drawer  title={heading} onClose={onClose} open={isOpen}>
        {children}
      </Drawer>
    </>
  );
};
export default EDrawer;