<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { sync } from "vuex-pathify";

export default {
  name: "AppNav",
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-view-dashboard", to: "/" },
      { title: "Page1", icon: "mdi-image", to: "page1" },
    ],
  }),

  computed: {
    drawer: sync("app/drawer"),
  },
};
</script>
