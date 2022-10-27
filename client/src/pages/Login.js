import React from 'react';
import { Layout, Col, Row } from 'antd';
import LoginForm from '../components/LoginForm';
import PageHeader from '../components/Header';

const { Content } = Layout;

const Login = () => {
  return (
    <div>
      <PageHeader />
      <Row justify="center">
        <Col align="middle">
          <Content
            style={{
              padding: '50px 50px',
              maxWidth: '600px',
            }}
          >
            <LoginForm />
          </Content>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
