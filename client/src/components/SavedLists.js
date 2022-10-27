import React from 'react';
import { Layout, Card } from 'antd';

const { Content } = Layout;

const SavedLists = () => {
  return (
    <Layout className="layout">
      <>
        <Content>
          <Card
            title="Your saved lists"
            style={{
              maxWidth: 400,
            }}
          >
            <p>Weekly essentials</p>
            <p>Monthly shop</p>
            <p>Test list</p>
          </Card>
        </Content>
      </>
    </Layout>
  );
};

export default SavedLists;
