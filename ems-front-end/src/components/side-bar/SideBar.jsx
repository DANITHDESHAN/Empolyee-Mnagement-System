import {
  
  UsergroupAddOutlined,
  UserAddOutlined,
  
} from '@ant-design/icons';
import {  Menu,PageHeader, } from 'antd';
import React, { useState } from 'react';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Create Employee', '1', <UserAddOutlined />),
  getItem('View Employee', '2', <UsergroupAddOutlined />),
  
];
const SideBar = () => {
  const [mode, setMode] = useState('inline');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
 
  return (
    <>
    <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="EMS"
    // subTitle="This is a subtitle"
  />
  
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        items={items}
      />
    </>
  );
};
export default SideBar;