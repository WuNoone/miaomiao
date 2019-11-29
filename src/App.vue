<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
</style>
