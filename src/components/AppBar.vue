<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
import { sync } from "vuex-pathify";

export default {
  name: "AppBar",
  data: () => ({
    //
  }),

  computed: {
    drawer: sync("app/drawer"),
  },
};
</script>
