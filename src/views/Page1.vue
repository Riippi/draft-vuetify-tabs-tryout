<template>
  <v-container class="fill-height" fluid>
    <v-tabs v-model="activeTab">
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

    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center text-h3"> Page 1 </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Page1",
  data() {
    return {
      activeTab: `/page1/child1`,
      tabs: [
        { id: 1, name: "Child 1", route: `/page1/child1` },
        { id: 2, name: "Child 2", route: `/page1/child2` },
        { id: 3, name: "Child 3", route: `/page1/child3` },
      ],
    };
  },
};
</script>
