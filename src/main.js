import Vue from "vue";
import VueToastify from "vue-toastify";

import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.css";

Vue.config.productionTip = false;
Vue.use(VueToastify, {
  canTimeout: true,
  errorDuration: 3000,
  successDuration: 3000
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
