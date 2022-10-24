import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Userdash = () => {
  return (
    <div>
      <Content
        style={{
          padding: '50px 50px',
        }}
      >
        <div className="site-layout-content">
          <h1>User Dashboard</h1>
        </div>
      </Content>
    </div>
  );
};

export default Userdash;
