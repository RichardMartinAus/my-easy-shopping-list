import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Home = () => {
  return (
    <div>
      <Content
        style={{
          padding: '50px 50px',
        }}
      >
        <div className="site-layout-content">Content</div>
      </Content>
    </div>
  );
};

export default Home;
