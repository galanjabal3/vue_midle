import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin, BSpinner , BIcon } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "tailwindcss/dist/tailwind.min.css";
import "tailwindcss/dist/base.min.css";
import "tailwindcss/dist/components.min.css";
import "tailwindcss/dist/tailwind-dark.min.css";
import "tailwindcss/dist/tailwind-experimental.min.css";
import "tailwindcss/dist/utilities.min.css";

Vue.component('b-spinner', BSpinner)
Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('BIcon', BIcon)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
