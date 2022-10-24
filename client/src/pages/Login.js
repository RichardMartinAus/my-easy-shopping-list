import React from 'react';
import { Layout } from 'antd';
import LoginForm from '../components/LoginForm';

const { Content } = Layout;

const Login = () => {
  return (
    <div>
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
