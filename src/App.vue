<template>
  <v-app>
    <v-tabs v-model="activeTab">
      <!-- <v-tabs v-model="activeTab" optional>
     -->
      <v-tabs-slider
        color="primary"
        class="xrd-main-tabs-slider"
      ></v-tabs-slider>

      <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>

      <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route">
        <router-view></router-view>
      </v-tab-item>
    </v-tabs>

    Project tab with child tabs
  </v-app>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      activeTab: `/page1`,
      tabs: [
        { id: 1, name: "Top 1", route: `/page1` },
        { id: 2, name: "Top 2", route: `/page2` },
        { id: 3, name: "Top 3", route: `/page3` },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-tabs-slider.xrd-main-tabs-slider {
  width: 7px;
  margin-left: auto;
  margin-right: auto;
}

.v-tab {
  text-transform: none;
  font-weight: 600;
}

.v-tabs-slider.xrd-sub-tabs-slider {
  width: 40px;
  margin-left: auto;
  margin-right: auto;
}

.v-tab {
  letter-spacing: normal !important;
}
</style>



<!-- <template>
  <v-app>
    <app-bar></app-bar>

    <app-nav></app-nav>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import AppNav from "./components/AppNav";

export default {
  name: "App",
  components: {
    AppBar,
    AppNav,
  },
};
</script>
-->
