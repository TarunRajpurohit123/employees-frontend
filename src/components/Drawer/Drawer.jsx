import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const EDrawer = ({label,children,btnStyles,heading}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button style={btnStyles} type="primary" onClick={showDrawer}>
        {label}
      </Button>
      <Drawer title={heading} onClose={onClose} open={open}>
        {children}
      </Drawer>
    </>
  );
};
export default EDrawer;