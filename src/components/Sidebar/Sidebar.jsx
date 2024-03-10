import React from 'react';
import { AppstoreOutlined,UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import "./sidebar.css";
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to={"/"}>Dashboard</Link>, 'dashboard',<AppstoreOutlined />),
  getItem(<Link to={"/employee"}>Employees</Link>, 'employees',<UserOutlined />),
];
const Sidebar = () => {
  return (
    <Menu
      className='E__sidebar'
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Sidebar;