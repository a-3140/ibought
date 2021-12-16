import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import store from "./store";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import { createProvider } from "./store";

import "./element";

// configure language used by element
locale.use(lang);

// Remove tips while on development
Vue.config.productionTip = false;

// To be used for PWA settings
import "./registerServiceWorker";

new Vue({
  el: "#app",
  router,
  i18n,
  apolloProvider: createProvider(),
  store,
  render: (h) => h(App),
});
