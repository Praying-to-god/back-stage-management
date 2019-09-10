import Link from 'umi/link';
import { Breadcrumb } from 'antd';
import { connect } from 'dva';

const HeaderLeft = ({ menus, match }) => {
  const path = match.path;
  const AllMenuItems = [];

  // 转换成如下数组进行渲染
  // [{href:'/'},{href:'dataManage/orderList'},{hreg:'addData/store'}]
  menus.forEach(item => {
    if (item.children) {
      // ...得到一维数组
      AllMenuItems.push(...item.children);
    } else {
      AllMenuItems.push(item);
    }
  });

  //  匹配当前选中菜单
  const curMenuItem = AllMenuItems.find(item => item.href === path);

  //   截取菜单 / 前后数据 进行渲染
  let breadLeft = `${curMenuItem.bread.split('/')[0]}`;
  let breadRight = `${curMenuItem.bread.split('/')[1]}`;
  //  判断 选中首页是单独渲染 避免出现 /
  if (breadLeft === '') {
    return (
      <Breadcrumb style={{ marginLeft: '20px' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
      </Breadcrumb>
    );
  } else {
    return (
      <Breadcrumb style={{ marginLeft: '20px' }}>
        <Breadcrumb.Item>
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={curMenuItem.href}>{breadLeft}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{breadRight === 'undefined' ? '' : breadRight}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
};

// {match.path === item.href ? 'ant-menu-item-selected' : ''}
export default connect(
  ({ global }) => ({
    // 取出仓库的 menus 菜单栏数据
    menus: global.menus,
  }),
  null,
)(HeaderLeft);
