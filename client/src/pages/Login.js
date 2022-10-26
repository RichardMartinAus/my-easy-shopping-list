import React from 'react';
import { Layout } from 'antd';
import LoginForm from '../components/LoginForm';
import PageHeader from '../components/Header';

const { Content } = Layout;

const Login = () => {
  return (
    <div>
      <PageHeader />
      <Content
        style={{
          padding: '50px 50px',
          maxWidth: '600px',
        }}
      >
        <LoginForm />
      </Content>
    </div>
  );
};

export default Login;
