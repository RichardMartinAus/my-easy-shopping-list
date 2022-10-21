import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, PageHeader } from 'antd';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  //   const [showModal, setShowModal] = useState(false);

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="My Easy Shopping List"
        extra={[
          <Button key="2">Home</Button>,
          <Button key="1" type="primary">
            Login
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default AppNavbar;
