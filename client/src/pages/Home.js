import React from 'react';
import { Layout } from 'antd';
import PageHeader from '../components/Header';

const { Content } = Layout;

const Home = () => {
  return (
    <div>
      <PageHeader />
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
