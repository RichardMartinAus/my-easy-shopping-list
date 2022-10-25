import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import whiteLogo from '../assets/images/logo-white.svg';

const { Header } = Layout;

const PageHeader = () => {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/user">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => Auth.logout()}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      );
    } else {
      return (
        <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      );
    }
  }

  return (
    <Layout className="layout">
      <Header>
        <img
          className="logo"
          src={whiteLogo}
          alt="My Easy Shopping List logo in white"
        />
        {showNavigation()}
      </Header>
    </Layout>
  );
};

export default PageHeader;
