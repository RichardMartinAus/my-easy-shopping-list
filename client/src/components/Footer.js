import React, { useState } from 'react';
import { Layout } from 'antd';
import Nav from '../components/Navbar';

const { Footer } = Layout;

const PageFooter = () => {
  return (
    <Layout className="layout">
      <>
        <Footer
          className="fixed-footer"
          style={{
            textAlign: 'center',
          }}
        >
          Created by Richard Martin using React and Ant Design ©2022
        </Footer>
      </>
    </Layout>
  );
};

export default PageFooter;
