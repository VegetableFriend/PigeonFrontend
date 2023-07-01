import { FolderOutlined, TwitterOutlined, UploadOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, List, message, Upload, Button } from 'antd';
import React from 'react';

const { Header, Content, Sider } = Layout;

const fileNavigationItem = {
  key: 'fileNavigationItem',
  icon: React.createElement(FolderOutlined),
  label: '文件列表'
};

const leftNavigationItems = [fileNavigationItem];

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  beforeUpload: (file) => {
    let blob = file.slice(0, 100);

    console.log(blob);
    return false;
  }
};


const PigeonMainPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{
      height: '100%',
    }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 64
        }}
      >
        <Logo></Logo>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Layout
          style={{
            height: '100%',
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              style={{
                height: '100%',
              }}
              items={leftNavigationItems}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
            }}
          >
  {/* <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  /> */}  
  
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

function Logo() {
  return (
    <Layout style={{
      background: 'rgba(0, 21, 41, 1)',
    }}>
      <Layout style={{
        background: 'rgba(0, 0, 0, 0)',
        height: 14,
      }}>
        <TwitterOutlined style={{
          textAlign: 'left',
          color: 'white'
        }}></TwitterOutlined>
      </Layout>
      <Layout style={{
        background: 'rgba(0, 0, 0, 0)',
        height: 32,
        lineHeight: '32px',
        color: 'white',
      }}>
        Pigeon
      </Layout>
    </Layout>
  );
}

export default PigeonMainPage;
