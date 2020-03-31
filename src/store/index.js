import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tooltip: null,
  },
  getters: {
    getTooltip: state => state.tooltip,
  },
  mutations: {
    showTooltip(state, tooltip) {
      state.tooltip = tooltip;
    },
    hideTooltip(state) {
      state.tooltip = null;
    },
  },
  actions: {
  },
  modules: {
  },
});
