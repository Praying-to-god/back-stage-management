export default {
  namespaced: 'global',
  state: {
    menus: [
      { id: '1-1', icon: 'appstore', theme: 'filled', name: '首页', href: '/', bread: '' },
      {
        id: '2',
        name: '数据管理',
        icon: 'file',
        theme: 'filled',
        children: [
          { id: '2-1', name: '用户列表', href: '/dataManage/userList', bread: '数据管理/用户列表' },
          {
            id: '2-2',
            name: '商家列表',
            href: '/dataManage/storeList',
            bread: '数据管理/商家列表',
          },
          { id: '2-3', name: '食品列表', href: '/dataManage/foodList', bread: '数据管理/食品列表' },
          {
            id: '2-4',
            name: '订单列表',
            href: '/dataManage/orderList',
            bread: '数据管理/订单列表',
          },
          {
            id: '2-5',
            name: '管理员列表',
            href: '/dataManage/adminList',
            bread: '数据管理/管理员列表',
          },
        ],
      },
      {
        id: '3',
        icon: 'plus',
        theme: '',
        name: '添加数据',
        children: [
          { id: '3-1', name: '添加商铺', href: '/addData/store', bread: '添加数据/添加商铺' },
          { id: '3-2', name: '添加商品', href: '/addData/food', bread: '添加数据/添加商品' },
        ],
      },
      {
        id: '4',
        icon: 'star',
        theme: 'filled',
        name: '图表',
        children: [{ id: '4-1', name: '用户分布', href: '/chart', bread: '图表/用户分布' }],
      },
      {
        id: '5',
        icon: 'edit',
        theme: 'filled',
        name: '编辑',
        children: [{ id: '5-1', name: '文本编辑', href: '/editor', bread: '编辑/文本编辑' }],
      },
      {
        id: '6',
        icon: 'setting',
        theme: 'filled',
        name: '设置',
        children: [{ id: '6-1', name: '管理员设置', href: '/set', bread: '设置/管理员设置' }],
      },
      {
        id: '7',
        icon: 'exclamation-circle',
        theme: 'filled',
        name: '说明',
        href: '/explain',
        bread: '说明/',
      },
    ],
  },
};
