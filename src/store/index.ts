import { apolloClient } from "@/main";
import { LOGIN } from "@/graphql/mutations";
import { CURRENT_USER } from "@/graphql/queries";
import Vue from "vue";
import Vuex from "vuex";
import { DrawerState } from "@/constants";

Vue.use(Vuex);

export default new Vuex.Store({
  // global default state
  state: {
    user: {},
    authStatus: false,
    token: null,
    drawer: {
      showDrawer: false,
      component: null,
      direction: null,
    },
  },
  getters: {
    authStatus: (state) => state.authStatus,
    user: (state) => state.user,
    drawer: (state) => state.drawer,
  },
  mutations: {
    TOGGLE_DRAWER(state, options) {
      const { showDrawer, component, direction } = options;
      state.drawer.component = component;
      state.drawer.direction = direction;
      state.drawer.showDrawer = showDrawer;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGIN_USER(state, user) {
      state.authStatus = true;
      state.user = { ...user };
    },
    LOGOUT_USER(state) {
      state.authStatus = false;
      state.token = null;
      localStorage.removeItem("access-token");
    },
  },
  actions: {
    async toggleDrawer({ commit, dispatch }, state: DrawerState) {
      commit("TOGGLE_DRAWER", state);
    },
    async login({ commit, dispatch }, form) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: LOGIN,
          variables: { ...form },
        });
        const token = data.Login.accessToken;
        commit("SET_TOKEN", token);
        localStorage.setItem("access-token", token);
        dispatch("setUser");
      } catch (e) {
        console.log(e);
      }
    },
    async setUser({ commit }) {
      const { data } = await apolloClient.query({ query: CURRENT_USER });
      commit("LOGIN_USER", data);
    },
    async logout({ commit, dispatch }) {
      commit("LOGOUT_USER");
    },
  },
  modules: {},
});
