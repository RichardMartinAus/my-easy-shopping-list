import React from 'react';
import { Layout } from 'antd';
import SignupForm from '../components/SignupForm';

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
        <SignupForm />
      </Content>
    </div>
  );
};

export default Login;
