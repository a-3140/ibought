import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import i18n from "@/i18n";
import store from "@/store";

import "./element";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

import { createProvider } from "@/vue-apollo";

// To be used for PWA settings
import "./registerServiceWorker";

// configure language used by element
locale.use(lang);

// Remove tips while on development
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  i18n,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
});
