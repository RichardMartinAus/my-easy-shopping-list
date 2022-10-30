import React from 'react';
import { Link } from 'react-router-dom';
import { Col, List, Button } from 'antd';

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
        <Button type="primary" htmlType="submit" block className="btn">
          <Link to="/listview">View this list</Link>
        </Button>
      </Col>
    </>
  );
};

export default ViewList;
