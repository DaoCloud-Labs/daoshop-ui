/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import * as types from './mutation-types';

// initState
const initState = {
  cast: [],
  buy: [],
};

// mutations
const mutations = {
  [types.ADD_BUY](state, id) {
    const index = state.buy.indexOf(id);
    if (index === -1) {
      state.buy.push(id);
    } else {
      state.buy.splice(index, 1);
    }
  },
  [types.EMPTY_CAST](state) {
    state.cast = [];
    state.buy = [];
  },
  [types.ADD_GOOD](state, data) {
    state.cast.push(data);
  },
  [types.DELETE_CAST_GOOD](state, index) {
    state.cast.splice(index, 1);
  },
  [types.ADD_CAST_GOOD](state, index) {
    state.cast[index].num += 1;
  },
  [types.MINUSE_CAST_GOOD](state, index) {
    if (state.cast[index].num === 1) {
      return state.cast.splice(index, 1);
    }
    state.cast[index].num -= 1;
  },
};

// actions
const actions = {
  ADD_GOOD: (context, data) => {
    const index = context.state.cast.map(i => i.id).indexOf(data.id);
    if (index === -1) {
      context.commit(types.ADD_GOOD, { ...data, num: 1 });
    } else {
      context.commit(types.ADD_CAST_GOOD, index);
    }
  },
};

// getters
const getters = {
};

export default {
  state: initState,
  getters,
  actions,
  mutations,
};
