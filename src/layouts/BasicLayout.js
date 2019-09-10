// 基本页面布局，后台首页需要使用。包含公用的头部、左侧等组件
import React from 'react';
import { connect } from 'dva';

// 引入菜单栏组件
import XhMenu from './components/XhMenu';
// 引入面包屑组件
import HeaderLeft from './components/HeaderLeft';

// antd Layout
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

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
          <XhMenu match={this.props.match} />
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
            <HeaderLeft match={this.props.match} />
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

export default connect(
  ({ global }) => ({
    menus: global.menus,
  }),
  null,
)(BasicLayout);
