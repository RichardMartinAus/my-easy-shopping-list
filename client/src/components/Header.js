import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import whiteLogo from '../assets/images/logo-white.svg';

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Layout className="layout">
      <Header>
        <img
          className="logo"
          src={whiteLogo}
          alt="My Easy Shopping List logo in white"
        />
        <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default PageHeader;
