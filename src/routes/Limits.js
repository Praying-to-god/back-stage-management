// 权限与登录的校验工作
import { Fragment } from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';

const Limits = ({ children, user }) => {
  if (user) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default connect(
  ({ global }) => ({
    user: global.user,
  }),
  null,
)(Limits);
