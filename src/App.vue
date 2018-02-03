<template>
  <div id="app">
    <PostsList/>
    <PostContent/>
  </div>
</template>

<script>

import PostsList from '@/components/PostsList';
import PostContent from '@/components/PostContent';

export default {
  name: 'App',
  components: { PostsList, PostContent },
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
  display: flex;
  text-align: center;
  background-color: rgb(245,245,245);
  overflow: hidden;
}
</style>
