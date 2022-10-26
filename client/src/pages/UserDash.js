import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { Layout } from 'antd';
import PageHeader from '../components/Header';

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
          <h1>User Dashboard</h1>
          {user ? (
            <h2>
              Welcome back, <strong>{user.username}</strong>!
            </h2>
          ) : null}
        </div>
      </Content>
    </div>
  );
};

export default Userdash;
