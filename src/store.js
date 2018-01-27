import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    postList: [],
  },

  mutations: {
    increment(state) {
      state.count += 1;
    },
    init(state) {
      const api = 'https://www.reddit.com/r/all/top.json?limit=50';
      Vue.axios.get(api).then((response) => {
        state.postList = response.data.data.children;
      });
    },
    dismiss(state, index) {
      state.postList.splice(index, 1);
    },
    dismissAll(state) {
      state.postList = [];
    },
  },
});

export default store;
