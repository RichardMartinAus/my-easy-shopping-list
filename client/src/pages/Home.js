import React from 'react';
import { Layout, Col, Row } from 'antd';
import PageHeader from '../components/Header';
import logo from '../assets/images/mesl-logo-bw.svg';

const { Content } = Layout;

const Home = () => {
  return (
    <div>
      <PageHeader />
      <Row justify="center">
        <Col align="middle">
          <Content
            style={{
              padding: '50px 50px',
            }}
          >
            <div className="site-layout-content">
              <h1 className="centered-text">Welcome to</h1>
              <img
                className="page-logo"
                src={logo}
                alt="My Easy Shopping List logo in black"
              />
              <p className="centered-text">
                Here you'll be able to create an account and manage all your
                shopping lists in one place! Our aim is to make your life
                easier, more organised and more convenient.
              </p>
              <h3 className="centered-text">
                NO MORE - "aaahhhh, I forgot to get milk!" when you get home.
              </h3>
              <p className="centered-text">
                Sign up today to live life the{' '}
                <span className="centered-text script-text">Easy</span> way!
              </p>
            </div>
          </Content>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
