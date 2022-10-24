import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';

import Auth from '../utils/auth';

const Nav = () => {
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          textAlign: 'right',
        }}
      />
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
    </div>
  );
};

export default Nav;
