// 登录注册页面
import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './index.scss';

class Login extends React.Component {
  handleSubmit = e => {
    // 阻止默认提交 不刷新页面
    e.preventDefault();
    // 做表单校验, 接收一个回调函数，回调函数接收两个参数，error 、values
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 传递props 登录成功时来跳转页面
        this.props.onLogin(values, this.props.history);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h1>登录</h1>
        <Form onSubmit={this.handleSubmit} className={styles.login_form}>
          <Form.Item>
            {/* 用户名 */}
            {getFieldDecorator('user_name', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {/* 密码 */}
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ height: '38px' }}
              htmlType="submit"
              className={styles.login_form_button}
            >
              Log in
            </Button>
          </Form.Item>
          <p>温馨提示：</p>
          <p>未登录过的新用户，自动注册</p>
          <p>注册过的用户可凭账号密码登录</p>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => {
    return {
      onLogin: (values, history) => {
        dispatch({
          type: 'global/loginSync',
          payload: values,
          history,
        });
      },
    };
  },
)(Form.create(null)(Login));
