// 基本页面布局，后台首页需要使用。包含公用的头部、左侧等组件
import React from 'react';

// antd Layout
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// import styles from './BasicLayout.scss';

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Menu.Item>
            {/* <Menu.Item key="2">
              <Icon type="desktop" />
              <span>数据管理</span>
            </Menu.Item> */}
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>数据管理</span>
                </span>
              }
            >
              <Menu.Item key="2">用户列表</Menu.Item>
              <Menu.Item key="3">商家列表</Menu.Item>
              <Menu.Item key="4">食品列表</Menu.Item>
              <Menu.Item key="5">订单列表</Menu.Item>
              <Menu.Item key="6">管理员列表</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>添加数据</span>
                </span>
              }
            >
              <Menu.Item key="7">添加商铺</Menu.Item>
              <Menu.Item key="8">添加商品</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="team" />
                  <span>图表</span>
                </span>
              }
            >
              <Menu.Item key="9">用户分布</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="team" />
                  <span>编辑</span>
                </span>
              }
            >
              <Menu.Item key="10">文本编辑</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="team" />
                  <span>设置</span>
                </span>
              }
            >
              <Menu.Item key="11">管理员设置</Menu.Item>
            </SubMenu>
            <Menu.Item key="12">
              <Icon type="file" />
              <span>说明</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: '#fff',
              padding: 0,
              marginBottom: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {' '}
            <Breadcrumb style={{ marginLeft: '20px' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ marginRight: '20px' }}>
              <img
                src="//elm.cangdu.org/img/default.jpg"
                alt=""
                style={{ width: '36px', height: '36px', borderRadius: '50%', display: 'block' }}
              />
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
