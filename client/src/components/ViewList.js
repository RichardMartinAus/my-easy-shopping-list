import React from 'react';
import { Col, List } from 'antd';

// const { Content } = Layout;
const data = [
  'Bread',
  'Milk',
  'Eggs',
  'Apples',
  'Almond milk',
  'Lettuce',
  'Ham',
  'Tomatoes',
  'Lean mince',
];

const ViewList = () => {
  return (
    <>
      <Col span={22}>
        <h2>Your Selected List:</h2>
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

export default ViewList;
