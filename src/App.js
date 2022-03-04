import logo from './logo.svg';
import './App.css';
import { Button, Layout, Menu, Breadcrumb, Form, Steps } from 'antd';

const { Header, Content, Footer } = Layout;
const { Step } = Steps;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" >
            BONE AGE ACCESSMENT
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <div className="form-title">
              儿童骨龄评估
            </div>
            <div className="form-background">
            <Steps current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>,
              <Form>
                <Button type="primary" >
                  Choose File
                </Button>
              </Form>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
