import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import store from "./store";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import { ApolloLink, concat } from "apollo-link";
import { ApolloClient } from "apollo-client";
import "./element";

// To be used for PWA settings
import "./registerServiceWorker";

// configure language used by element
locale.use(lang);

// Remove tips while on development
Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  let token = localStorage.getItem("access-token");
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
function createProvider(options = {}) {
  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        fetchPolicy: "cache-and-network",
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

new Vue({
  el: "#app",
  router,
  i18n,
  apolloProvider: createProvider(),
  store,
  render: (h) => h(App),
});
