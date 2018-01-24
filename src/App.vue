<template>
  <div id="app">
    <img src="./assets/logo.png">
    <SideList/>
    <p>{{ $t("message.hello") }}</p>
    <router-view/>
  </div>
</template>

<script>

import SideList from '@/components/SideList';

export default {
  name: 'App',
  components: { SideList },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
