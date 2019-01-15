import Vue from 'vue';
import asyncUtil from '../lib/asyncUtil';

import { API } from './index';
import mutationTypesHelper from '../lib/mutationTypesHelper';

const getPost = mutationTypesHelper('GET_POST');
const getPosts = mutationTypesHelper('GET_POSTS');

const state = {
  [getPosts.stateKey]: [],
  [getPosts.loadingKey]: false,
  [getPost.stateKey]: {},
  [getPost.loadingKey]: false
};

const mutations = {
  [getPosts.SUCCESS]: (state, data) => {
    state[getPosts.loadingKey] = false;
    Vue.set(state, [getPosts.stateKey], data);
  },
  [getPosts.PENDING]: state => {
    Vue.set(state, [getPosts.loadingKey], true);
  },
  [getPosts.FAILURE]: (state, data) => {
    console.log(data);
  },
  [getPost.SUCCESS]: (state, data) => {
    state[getPost.loadingKey] = false;
    Vue.set(state, [getPost.stateKey], data);
  },
  [getPost.PENDING]: state => {
    Vue.set(state, [getPost.loadingKey], true);
  },
  [getPost.FAILURE]: (state, data) => {
    console.log(data);
  }
};

const actions = {
  getPosts(store) {
    asyncUtil(store, {
      apiCall: () => API.getPosts(),
      mutationTypes: getPosts
    });
  },
  getPost(store, id) {
    asyncUtil(store, {
      apiCall: () => API.getPost(id),
      mutationTypes: getPost
    });
  }
};

export default {
  state,
  mutations,
  actions,
  namespace: true
};
