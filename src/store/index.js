import Vue from 'vue';
import Vuex from 'vuex';

import posts from './posts';

import api from '../lib/api';

Vue.use(Vuex);

export const API = api();

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posts
  }
});
