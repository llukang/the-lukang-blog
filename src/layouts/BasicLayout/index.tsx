import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import SiderMenu from './components/SiderMenu';
import styles from './index.less';

const { Content } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <Layout>
      <Header />·
      <Layout>
        <SiderMenu />
        <Layout>
          <Breadcrumb />
          <Content>Content</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
