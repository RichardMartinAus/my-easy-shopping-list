import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import { Button, Form, Input } from 'antd';

function SignupForm() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const onFinish = async (values) => {
    try {
      const mutationResponse = await addUser({
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      // useNavigate
      navigate('/user');
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        noValidate
        // validated={validated}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input your email address!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          onChange={handleChange}
          value={formState.password}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to="/login">← Go to Login</Link>
    </>
  );
}

export default SignupForm;
