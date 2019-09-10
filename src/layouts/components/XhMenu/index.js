import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
const { SubMenu } = Menu;

const XhMenu = ({ menus, match }) => {
  const newMenus = menus;

  // 计算当前需要高亮的 menus.item  与需要默认展开的 SubMenu.item
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

  // 路由地址匹配 当前需要高亮的菜单
  const curMenuItem = AllMenuItems.find(item => item.href === path);

  // 当前需要高亮的item.id
  let selectedKeys = [`${curMenuItem.id}`];

  // 当前需要展开的 SubMenu
  let openKeys = [`${curMenuItem.id.split('-')[0]}`];

  return (
    // defaultSelectedKeys 默认高亮  defaultOpenKeys 默认展开 SubMenu
    <Menu theme="dark" mode="inline" defaultOpenKeys={openKeys} defaultSelectedKeys={selectedKeys}>
      {newMenus.map(item => {
        // 判断当前的item是否是一个SubMenu
        if (item.children) {
          // 是 遍历SubMenu
          return (
            <SubMenu
              key={item.id}
              title={
                <span>
                  <Icon type={item.icon} theme={item.theme} />
                  <span>{item.name}</span>
                </span>
              }
            >
              {item.children.map(item => {
                // 遍历 SubMenu 中的 Menu
                return (
                  <Menu.Item key={item.id}>
                    <Link to={item.href}>{item.name}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        } else {
          // 不是 直接遍历 Menu
          return (
            <Menu.Item key={item.id}>
              <Link to={item.href}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};

export default connect(
  ({ global }) => ({
    // 取出仓库的 menus 菜单栏数据
    menus: global.menus,
  }),
  null,
)(XhMenu);
