import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

// Import Apollo userMutation and LOGIN_USER mutation
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

function LoginForm(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const mutationResponse = await login({
        variables: {
          username: values.username,
          password: values.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      // useNavigate
      navigate('/user');
    } catch (error) {
      console.log(error);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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
        className="form-background"
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
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2 className="centered-text">Please login below</h2>
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
          <Button type="primary" htmlType="submit" style={{ float: 'left' }}>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" htmlType="submit" block className="btn">
        <Link to="/signup">Click to signup!</Link>
      </Button>
    </>
  );
}

export default LoginForm;
