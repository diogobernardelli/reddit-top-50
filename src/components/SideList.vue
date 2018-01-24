<template>
  <div>
    <p v-for="item in post_list">
      <img v-bind:src="item.data.url" alt="">
      {{ item.data.subreddit }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'SideList',
  asyncComputed: {
    post_list() {
      return new Promise((resolve) => {
        const api = 'https://raw.githubusercontent.com/deviget/Front-end/master/top.json?token=AZCPPPAkOKtOVLvADkoOAM5koH7tK20Jks5acRHwwA%3D%3D';
        this.axios.get(api).then((response) => {
          resolve(response.data.data.children);
          console.log(response.data.data.children);
        });
      });
    },
  },
};
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped lang="scss">
.mac {
  position: absolute;
  bottom: 0;
}
</style>
