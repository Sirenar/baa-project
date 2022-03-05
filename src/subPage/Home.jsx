import React, { useState } from 'react';
import './Home.css';
import { Menu, Button, Form, Steps, Dropdown, Divider, Upload, Tooltip, Table, Row, Col } from 'antd';

const { Step } = Steps;

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    dataIndex: 'age',
    key: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.gender.indexOf(value) === 0,

  },
  {
    title: '影像图片',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      // <Space size="middle">
      //   <a>Invite {record.name}</a>
      //   <a>Delete</a>
      // </Space>
      <div>错做</div>
    ),
  },
];

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

// console.log('fileList: ', )
// const onChange = info => {
//   console.log(info.file, info.fileList);
//   changeFileList(info.fileList);
// }



function Home() {
  const [fileList, changeFileList] = useState([]);
  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <div className="form-title">
        <h1>骨龄在线评估工具</h1>
        <h2>Get bone age accessment online & free</h2>
      </div>
      <div className='content-box'>
      <Divider />
        {/* <Steps progressDot current={1} className="steps-box">
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps> */}
      <Table 
        showHeader={false}
        columns={columns} 
        dataSource={fileList} 
        pagination={false}
      />
      <Form style={{display: 'flex'}}>
        <div className="uploader-container">
          <div className='btn-holder'>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // fileList={fileList}
            onChange={ info => {
              console.log(info.file, info.fileList);
              changeFileList(info.fileList);
            }}
            itemRender={(originNode, file, currFileList) => {
              const errorNode = <Tooltip title="Upload Error">{originNode.props.children}</Tooltip>;
                return (
                  <div>
                    {file.status === 'error' ? errorNode : originNode}
                  </div> 
              )
            }}>
            <Button className="file-btn" >
              Choose File
            </Button>
          </Upload>
          <div className='add-btn-caption'>
            Use Ctrl or Shift to add several files at once
          </div>
          </div>
        </div>
            {/* <span className="operator-block">+</span>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button className="algo-btn">Model</Button>
            </Dropdown> */}
        <div className='submit-container'>
          <span>评估</span>
          {/* <svg></svg> */}
        </div>
      </Form>
    </div>
    </div>
  );
}

export default Home;