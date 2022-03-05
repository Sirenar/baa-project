import './App.css';
import { Layout, Menu } from 'antd';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './subPage/Home'
import Records from './subPage/Records'
import LogoIcon from './logo.png';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" >
            <img src={LogoIcon}></img>
            BONE AGE ACCESSMENT
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">骨龄评估
              <Link to='/home'></Link>
            </Menu.Item>
            <Menu.Item key="2">病例管理
              <Link to='/records'></Link>
            </Menu.Item>
            <Menu.Item key="3">模型训练
              <Link to='/training'></Link>
            </Menu.Item>

          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 100px', marginTop: 64 }}>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/records" element={<Records/>}/>
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
