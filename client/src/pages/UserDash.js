import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { Layout, Row, Col, Divider } from 'antd';
import PageHeader from '../components/Header';
import SavedLists from '../components/SavedLists';
import ViewList from '../components/ViewList';
import CreateList from '../components/CreateListForm';

const { Content } = Layout;

const Userdash = () => {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <div>
      <PageHeader />
      <Content
        style={{
          padding: '50px 50px',
        }}
      >
        <div className="site-layout-content">
          <Row>
            <h1>User Dashboard</h1>
          </Row>
          {user ? (
            <h2>
              Welcome back, <strong>{user.username}</strong>!
            </h2>
          ) : null}
          <Divider></Divider>
          <Row wrap={true}>
            <Col className="column" flex="1 0 33%">
              <SavedLists />
            </Col>
            <Col className="column" flex="1 0 33%">
              <ViewList />
            </Col>
            <Col className="column" flex="1 0 33%">
              <CreateList />
            </Col>
          </Row>
        </div>
      </Content>
    </div>
  );
};

export default Userdash;
