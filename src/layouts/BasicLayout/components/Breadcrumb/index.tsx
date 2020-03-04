import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import { getBreadcrumbs, throttle } from '@/utils';

// import Body from './components/Body';
// import Footer from './components/Footer';
// import SiderMenu from './components/SiderMenu';
import styles from './index.less';

const { SubMenu } = Menu;

const PageBreadcrumb: React.FC = props => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
