<link rel="icon" href="https://www.deviget.com/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="https://www.deviget.com/favicon.ico" />
<template>
  <div id="app">
    <SideList/>
    <PostContent/>
  </div>
</template>

<script>

import SideList from '@/components/SideList';
import PostContent from '@/components/PostContent';

export default {
  name: 'App',
  components: { SideList, PostContent },
};
</script>

<style>
* {
  transition: all 200ms ease-in-out;
}
a {
  text-decoration: none
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  background-color: rgb(245,245,245);
  overflow: hidden;
}
</style>
