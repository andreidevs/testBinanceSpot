<template>
  <div id="app">
    <a-tabs v-model="currentTab">
      <a-tab-pane key="Glass" tab="Glass">
        <Glass />
      </a-tab-pane>
      <a-tab-pane key="DiffList" tab="DiffList">
        <DiffList @select="currentTab = 'Glass'" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import DiffList from "../components/DiffList.vue";

export default {
  name: "BinanceGlassApp",
  data: () => ({
    currentTab: "Glass",
  }),

  components: {
    Glass: () => import(/* webpackChunkName:"GlassState" */ "../components/Glass.vue"),
    DiffList: () =>
      import(/* webpackChunkName:"DiffList" */ "../components/DiffList.vue"),
    DiffList,
  },
};
</script>

<style>
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
}
</style>
