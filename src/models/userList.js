import request from '../utils/request';

export default {
  namespaced: 'userList',

  state: {
    userList: [],
    // 数据总条数
    total: 80,
  },

  reducers: {
    setUserList(state, action) {
      return {
        ...state,
        ...{
          userList: action.userList,
        },
      };
    },
  },

  effects: {
    *getUserList(action, { put }) {
      const result = yield request.get('/v1/users/list', {
        params: {
          // 请求判断 优化
          // || 默认时
          // 跳过的条数
          offset: action.page * 10 || 0,
          // 每页数据条数 默认10
          limit: action.pageSize || 10,
        },
      });
      yield put({
        type: 'setUserList',
        userList: result,
      });
    },
  },
};
