import { LOGIN } from '@/graphql/mutations';
import { CURRENT_USER } from '@/graphql/queries';
import Vue from "vue";
import Vuex from "vuex";
import { apolloClient } from '@/main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    authStatus: false,
    token: null,
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.authStatus,
    user: (state) => state.user,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGIN_USER(state, user) {
      state.authStatus = true;
      state.user = { ...user };
    },
    LOGOUT_USER(state) {
      state.authStatus = false;
      state.token = null && localStorage.removeItem("apollo-token");
    },
  },
  actions: {
    /*
    async register({ commit, dispatch }, form) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: REGISTER_USER,
          variables: { ...form },
        });
        const token = JSON.stringify(data.createUser.token);
        commit("SET_TOKEN", token);
        localStorage.setItem("apollo-token", token);
        dispatch("setUser");
      } catch (e) {
        console.log(e);
      }
    },
    */
    async login({ commit, dispatch }, form) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: LOGIN,
          variables: { ...form },
        });
        const token = JSON.stringify(data.login.token);
        commit("SET_TOKEN", token);
        localStorage.setItem("apollo-token", token);
        dispatch("setUser");
      } catch (e) {
        console.log(e);
      }
    },
    async setUser({ commit }) {
      const { data } = await apolloClient.query({ query: CURRENT_USER });
      commit("LOGIN_USER", data);
    },
    async logOut({ commit, dispatch }) {
      commit("LOGOUT_USER");
    },
  },
  modules: {},
});
