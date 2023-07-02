import { FolderOutlined, TwitterOutlined, UploadOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, List, message, Upload, Button } from 'antd';
import Paragraph from 'antd/es/skeleton/Paragraph';
import React from 'react';

const { Header, Content, Sider } = Layout;

const fileNavigationItem = {
  key: 'fileNavigationItem',
  icon: React.createElement(FolderOutlined),
  label: '文件列表'
};

const leftNavigationItems = [fileNavigationItem];

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
  return (
    <Layout style={{
      height: '100%',
    }}>
      <PigeonCommonHeader></PigeonCommonHeader>
      <PigeonMainContent></PigeonMainContent>
    </Layout>
  );
};

/// Header
function PigeonCommonHeader() {
  const pigeonHeaderStyle = {
    style: {
      alignItems: 'center',
    }
  };

  return (
    <Header {...pigeonHeaderStyle}>
      <PigeonIcon></PigeonIcon>
      <PigeonLabel></PigeonLabel>
    </Header>
  );
}

function PigeonIcon() {
  return (
    <TwitterOutlined style={{
      display: 'block',
      textAlign: 'left',
      color: 'white'
    }}></TwitterOutlined>
  );
}

function PigeonLabel() {
  return (
    <p style={{
      background: 'rgba(0, 0, 0, 0)',
      height: 32,
      lineHeight: '32px',
      color: 'white',
    }}>
      Pigeon
    </p>
  );
}

/// Content
function PigeonMainContent() {
  return (
    <Layout>
       <PigeonMainSider></PigeonMainSider>
       <PigeonFileList></PigeonFileList>
    </Layout>
  );
}

function PigeonMainSider() {
  return (
    <Sider
    style={{
      background: 'white',
    }}
    width={200}
  >
    <Menu
      style={{
        height: '100%',
      }}
      items={leftNavigationItems}
    />
  </Sider>
  );
}

function PigeonFileList() {
  const pigeonFileListProps = {
    style: {
      width: '100%',
    },
    itemLayout: "horizontal",
    // dataSource: {data},
    renderItem: {PigeonFileListItem},
  };

  return (
    <List></List>
  );
}

function PigeonFileListItem(item, index) {
  return (
    <List.Item>
      <List.Item.Meta
        title={<a href="https://ant.design">{item.title}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  );
}

function PigeonUploadButton() {
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>上传文件</Button>
    </Upload> 
  );
}

export default PigeonMainPage;
