import { ApolloClient } from "apollo-client";
import { LOGIN } from "@/graphql/mutations";
import { CURRENT_USER } from "@/graphql/queries";
import Vue from "vue";
import Vuex from "vuex";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import { ApolloLink, concat } from "apollo-link";

Vue.use(Vuex);

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  let token = localStorage.getItem("access-token") || null;
  token = token ? `Bearer ${token}` : null;

  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token,
    },
  }));

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

// Call this in the Vue app file
export function createProvider(options = {}) {
  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      },
    },
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log(
        "%cError",
        "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",
        error.message
      );
    },
  });

  return apolloProvider;
}

export default new Vuex.Store({
  // global default state
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
      state.token = null && localStorage.removeItem("access-token");
    },
  },
  actions: {
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
    async logOut({ commit, dispatch }) {
      commit("LOGOUT_USER");
    },
  },
  modules: {},
});
