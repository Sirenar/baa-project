import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '性别',
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
    title: '引用数',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    gender: 'male',
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '花花',
    age: 12,
    gender: 'female',
    address: 'London No. 1 Lake Park',
    tags: ['cute'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    gender: 'male',
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


function Records() {
    return (
     <div>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{ position: 'bottomLeft' }}
      />
     </div>
    );
  }

export default Records;