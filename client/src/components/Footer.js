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
          <p>
            <a href="https://github.com/RichardMartinAus/my-easy-shopping-list">
              View this source code on GitHub
            </a>{' '}
            • Background image by Aleksandar Pasaric on Pexels.com
          </p>
        </Footer>
      </>
    </Layout>
  );
};

export default PageFooter;
