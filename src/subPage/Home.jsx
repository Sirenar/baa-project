import './Home.css';
import React, { useState } from 'react';
import { Button, Form, Divider, Upload, Tooltip, Table, Tag, Select, Space } from 'antd';
import { PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Option } = Select;

function Home() {
  const columns = [
    {
      dataIndex: 'a',
      key: 'a',
      width: '32px',
    },
    {
      dataIndex: 'name',
      key: 'name',
      width: '440px',
      ellipsis: true,
      // render: text => <a>{text}</a>,
    },
    {
      dataIndex: 'age',
      key: 'age',
    },
    {
      dataIndex: 'gender',
    },
    {
      dataIndex: 'model',
      key: 'model',
      width: '200px',
      render: model => {
        return modelSelections(model)
      }
    },
    {
      dataIndex: 'status',
      width: '120px',
      align: 'center',
      render: status => {
        let color = '';
        switch(status) {
          case 'uploading':
            color = 'geekblue';
            break;
          case 'done':
            color = 'green';
            break;
          case 'error':
            color = 'volcano';
            break;
          case 'removed':
            color = 'volcano';
        }
        return (
          <Tag color={color}>
            {status.toUpperCase()}
          </Tag>
        )
      }
    },
    {
      dataIndex: 'size',
      key: 'size',
      width: '240px',
      align: 'center',
      className: 'size-font',
      render: size => {
        if (size>1024*1024) {
          size = (size/1048576).toFixed(1) + 'MB';
        } else if (size>1024) {
          size = Math.round(size/1024) + 'KB';
        }
        return (
          <div>{size}</div>
        )
      }
    },
    {
      title: '操作',
      key: 'action',
      width: '80px',
      render: _ => (
        <span className='btn-close' onClick={() => handleDelete(_)}></span>
      ),
    },
  ];

  const modelSelections = currentModel => (
    <>
      <Space size="middle" className='model-selection-box'>
        <span className='model-caption'>use</span>
        <Select defaultValue={currentModel || '模型1'} style={{ width: 100 }} onChange={handleChange}>
          <Option value="jack">模型1</Option>
          <Option value="lucy">模型2</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">模型3</Option>
        </Select>
      </Space>
    </>
  );
  
  const handleDelete = ({uid}) => {
    const dataSource = [...fileList];
    changeFileList(fileList.filter(item => item.uid !== uid));
  }

  
  const handleChange = value => {
    console.log(`selected ${value}`);
  }

  const [fileList, changeFileList] = useState([]);

  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <div className="form-title">
        <h1>骨龄在线评估工具</h1>
        <h2>Get bone age accessment online & free</h2>
      </div>
      <div className='content-box'>
      {/* <Divider /> */}
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
            fileList={fileList}
            onChange={ info => {
              changeFileList(info.fileList);
            }}
            showUploadList={false}
            multiple={true}
            >
            <Button className="file-btn" icon={<PlusOutlined style={{color: '#4f68b0'}}/>}>
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
          <span>评估结果</span>
          <div style={{position: 'relative'}}>
            <ArrowRightOutlined style={{color: 'white'}}/>
          </div>
        </div>
      </Form>
    </div>
    </div>
  );
}

export default Home;