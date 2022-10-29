import React from 'react';
import { Layout } from 'antd';

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
          <br></br>
          <a href="https://github.com/RichardMartinAus/my-easy-shopping-list">
            View this source code on GitHub
          </a>
        </Footer>
      </>
    </Layout>
  );
};

export default PageFooter;
