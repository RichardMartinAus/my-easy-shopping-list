import React, { useState } from 'react';
import { Alert, Button, Form, Input } from 'antd';

// Import Apollo userMutation and LOGIN_USER mutation
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: '',
    password: '',
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error, data }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
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
        validated={validated}
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
        {/* <Alert
          message="Something went wrong with your login credentials!"
          type="error"
          closable
          onClose={() => setShowAlert(false)}
          show={showAlert}
        /> */}
        <Form.Item
          label="Username"
          name="username"
          value={userFormData.username}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          value={userFormData.password}
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
          <Button
            // disabled={!(userFormData.username && userFormData.password)}
            type="primary"
            htmlType="submit"
            style={{ float: 'left' }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" htmlType="submit" style={{ float: 'left' }}>
        Click here to signup!
      </Button>
    </>
  );
};

export default LoginForm;
