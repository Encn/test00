<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import navHeader from './view/module/header';
export default {
  name: 'app',
  components: {
    navHeader
  }
};
</script>

<style>
#app {
  min-width: 1024px;
}
</style>
