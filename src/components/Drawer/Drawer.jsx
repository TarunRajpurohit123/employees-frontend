import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../../store/slices/drawerSlice';
const EDrawer = ({label,children,btnStyles,heading,isOpen}) => {
  const dispatch = useDispatch();
  const showDrawer = () => {
    dispatch(toggleDrawer(true))
  };
  const onClose = () => {
    dispatch(toggleDrawer(false))
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