import React from 'react';
import { Link } from 'react-router-dom';
import { Col, List, Button, Checkbox } from 'antd';

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

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const SingleList = () => {
  return (
    <>
      <Col className="listbackground">
        <h2>Your Selected List:</h2>
        <List
          size="large"
          className="singlelist"
          bordered={true}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              {item}
              <Checkbox
                onChange={onChange}
                style={{ float: 'right' }}
              ></Checkbox>
            </List.Item>
          )}
        />
        <Button type="primary" htmlType="submit" block className="btn">
          <Link to="/user">Back to dashboard</Link>
        </Button>
      </Col>
    </>
  );
};

export default SingleList;
