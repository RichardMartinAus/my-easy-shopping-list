import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import whiteLogo from '../assets/images/logo-white.svg';

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Layout className="layout">
      <Header>
        <img
          className="logo"
          src={whiteLogo}
          alt="My Easy Shopping List logo in white"
        />
        <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default PageHeader;
