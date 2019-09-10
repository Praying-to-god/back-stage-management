export default {
  state: {
    menus: [
      { id: '1-1', icon: 'appstore', theme: 'filled', name: '首页', href: '/' },
      {
        id: '2',
        name: '数据管理',
        icon: 'file',
        theme: 'filled',
        children: [
          { id: '2-1', name: '用户列表', href: '/dataManage/userList' },
          { id: '2-2', name: '商家列表', href: '/dataManage/storeList' },
          { id: '2-3', name: '食品列表', href: '/dataManage/foodList' },
          { id: '2-4', name: '订单列表', href: '/dataManage/orderList' },
          { id: '2-5', name: '管理员列表', href: '/dataManage/adminList' },
        ],
      },
      {
        id: '3',
        icon: 'plus',
        theme: '',
        name: '添加数据',
        children: [
          { id: '3-1', name: '添加商铺', href: '/addData/store' },
          { id: '3-2', name: '添加商品', href: '/addData/food' },
        ],
      },
      {
        id: '4',
        icon: 'star',
        theme: 'filled',
        name: '图表',
        children: [{ id: '4-1', name: '用户分布', href: '/chart' }],
      },
      {
        id: '5',
        icon: 'edit',
        theme: 'filled',
        name: '编辑',
        children: [{ id: '5-1', name: '文本编辑', href: '/editor' }],
      },
      {
        id: '6',
        icon: 'setting',
        theme: 'filled',
        name: '设置',
        children: [{ id: '6-1', name: '管理员设置', href: '/set' }],
      },
      { id: '7', icon: 'exclamation-circle', theme: 'filled', name: '说明', href: '/explain' },
    ],
  },
};
