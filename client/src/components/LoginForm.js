import React, { useState } from 'react';
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

  // used this function to refresh page when navigating from SO: https://stackoverflow.com/questions/46820682/how-do-i-reload-a-page-with-react-router
  const refreshPage = () => {
    navigate(0);
  };

  const onFinish = async (values) => {
    console.log(values);

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
      <h1>Please login below</h1>
      <Form
        name="basic"
        // labelCol={{
        //   span: 8,
        // }}
        // wrapperCol={{
        //   span: 16,
        // }}
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
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
        >
          <Button type="primary" htmlType="submit" style={{ float: 'left' }}>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Button htmlType="submit" style={{ float: 'left' }}>
        <Link to="/signup">Click here to signup!</Link>
      </Button>
    </>
  );
}

export default LoginForm;
