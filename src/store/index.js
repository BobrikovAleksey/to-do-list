import { createStore } from 'vuex';
import { MUTATION_TYPE as MT, page } from './dictionary';
// import tasks from './tasks';

const mutations = {
  /**
   * @param commit
   * @param state
   * @param newPage {string}
   */
  [MT.PAGE_CHANGE]: (state, newPage) => {
    state.page = newPage;
  },
};

const actions = {
  /**
   * @param commit
   * @param state
   * @param newPage {string}
   */
  pageChange({ commit, state }, newPage) {
    if (page[newPage] && (page[newPage] !== state.page)) {
      commit(MT.PAGE_CHANGE, newPage);
    }
  },
};

const getters = {
  pageCurrent: (state) => state.page,
};

export default createStore({
  state: {
    page: page.main,
  },
  mutations,
  actions,
  getters,
  modules: {
    // tasks,
  },
});
