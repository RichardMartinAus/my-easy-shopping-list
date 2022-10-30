import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const RightMenu = ({ mode }) => {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Menu theme="light" mode={mode}>
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
        <Menu theme="light" mode={mode}>
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

  return <Menu mode={mode}>{showNavigation()}</Menu>;
};

export default RightMenu;
