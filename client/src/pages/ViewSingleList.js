import React from 'react';
import { Layout, Col, Row } from 'antd';
import PageHeader from '../components/Header';
import SingleList from '../components/SingleList';

const { Content } = Layout;

const ViewSingleList = () => {
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
            <SingleList />
          </Content>
        </Col>
      </Row>
    </div>
  );
};

export default ViewSingleList;
