import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import whiteLogo from '../assets/images/logo-white.svg';
import RightMenu from './RightMenu';

// THIS MENU CODE IS ADAPTED FROM thisuraseniya ON GITHUB: https://github.com/thisuraseniya/Ant-Design-Navbar

const PageHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="mainheader">
          <div className="logo">
            <a href="/">
              <img
                className="logo"
                src={whiteLogo}
                alt="My Easy Shopping List logo in white"
              />
            </a>
          </div>
          <div className="navbar-menu">
            <Button
              className="menuButton"
              type="text"
              style={{ color: 'white' }}
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button>

            <Drawer
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <RightMenu mode={'inline'} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default PageHeader;
