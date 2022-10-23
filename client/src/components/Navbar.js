import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Layout, Menu } from 'antd';

import Auth from '../utils/auth';

const { Header, Content, Footer } = Layout;

const Nav = () => {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Created by Richard Martin using React and Ant Design ©2022
        </Footer>
      </Layout>
    </div>
  );
};

export default Nav;
