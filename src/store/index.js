import Vue from "vue";
import Vuex from "vuex";
import general from "./general"

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    general
  },
});
