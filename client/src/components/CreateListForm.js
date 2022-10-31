import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Col, Button, Form, Input, Space } from 'antd';
import { SAVE_LIST } from '../utils/mutations';

const CreateList = () => {
  let listname = '';

  const onFinish = (values: any) => {
    // setFormState('');
  };

  return (
    <>
      <h2>Create a new list here:</h2>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="List name" name="listname" value={listname}>
          <Input />
        </Form.Item>
        <Form.List name="list">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, item, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item {...restField} items={[item, 'item']}>
                    <Input placeholder="Add an item" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(item)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add additional items
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save List
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateList;
