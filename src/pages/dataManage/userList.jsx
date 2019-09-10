/**
 * Routes:
 *  - ./src/routes/Limits.js
 *  - ./src/layouts/BasicLayout.js
 */
// 用户列表页面
import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

// 表格列
const columns = [
  {
    title: '用户ID',
    dataIndex: 'user_id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '注册城市',
    dataIndex: 'city',
  },
  {
    title: '注册时间',
    dataIndex: 'registe_time',
  },
];

class UserList extends React.Component {
  render() {
    return (
      <div>
        {/* dataSource 数据源 */}
        {/* pagination 分页器属性 total 数据总条数(控制分页) onChange 页码改变的回调 */}
        <Table
          columns={columns}
          dataSource={this.props.userList}
          rowKey="user_id"
          pagination={{ total: this.props.total, onChange: this.props.getUserList }}
        ></Table>
      </div>
    );
  }

  componentDidMount() {
    this.props.getUserList();
  }
}

export default connect(
  ({ userList }) => {
    return {
      userList: userList.userList,
      total: userList.total,
    };
  },
  dispatch => {
    return {
      /**
       * 获取用户列表或分页切换时
       * @param {Number} page 页码
       * @param {Number} pageSize 每页显示的条数
       */
      getUserList(page, pageSize) {
        dispatch({
          type: 'userList/getUserList',
          page,
          pageSize,
        });
      },
    };
  },
)(UserList);
