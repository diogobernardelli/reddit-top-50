<link rel="icon" href="https://www.deviget.com/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="https://www.deviget.com/favicon.ico" />
<template>
  <div id="app">
    <PostsView/>
    <PostContent/>
  </div>
</template>

<script>

import PostsView from '@/components/PostsView';
import PostContent from '@/components/PostContent';

export default {
  name: 'App',
  components: { PostsView, PostContent },
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
