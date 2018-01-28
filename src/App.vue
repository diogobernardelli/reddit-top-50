<link rel="icon" href="https://www.deviget.com/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="https://www.deviget.com/favicon.ico" />
<template>
  <div id="app">
    <PostsView/>
  </div>
</template>

<script>

import PostsView from '@/components/PostsView';

export default {
  name: 'App',
  components: { PostsView },
};
</script>

<style>
* {
  transition: all 200ms ease-in-out;
}
a {
  text-decoration: none
}
#app, .app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: rgb(245,245,245);
  overflow: hidden;
}
</style>
