import React from 'react';
import { Col, List } from 'antd';

// const { Content } = Layout;
const data = ['Weekly essentials', 'Monthly big shop', 'Weekend quick shop'];

const SavedLists = () => {
  return (
    <>
      <Col span={22}>
        <h2>Your Saved Lists:</h2>
        <List
          size="large"
          className="lists"
          bordered={true}
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Col>
    </>
  );
};

export default SavedLists;
