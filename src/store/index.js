// Imports
import Vue from "vue";
import Vuex from "vuex";
import pathify from "../plugins/pathify";

import * as modules from "./modules";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [pathify.plugin],
  modules
});

export default store;
