<template>
  <nav id="sidebar">
    <div class="sidebar-header">
        <h3>Top 50 Reddit Posts</h3>
    </div>

    <ul class="list-unstyled components">
      <li v-for="item in post_list">
        <div class="author">
          <div class="thumbnail">
            <img v-bind:src="item.data.thumbnail" alt="">
          </div>
          <div class="name">
            author: {{ item.data.author }}<br />
          </div>
        </div>
        <strong>{{ item.data.title }}</strong><br />
        ups: {{ item.data.ups }}<br />
        downs: {{ item.data.downs }}<br />
        created: {{ item.data.created }}<br />
        <!-- url: {{ item.data.url }}<br /> -->
        num_comments: {{ item.data.num_comments }}<br />
        <a v-bind:href="item.data.permalink" target="_blank" >link aqui</a>
      </li>
        <!-- <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li>
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li><a href="#">Page</a></li>
                <li><a href="#">Page</a></li>
                <li><a href="#">Page</a></li>
            </ul>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li> -->
    </ul>
  </nav>
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
          // console.log(response.data.data.children);
        });
      });
    },
  },
};
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped lang="scss">
#sidebar {
  padding: 20px 15px;
  width: 450px;
  max-width: 450px;
  background: #34495e;
  color: #fff;
  transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
  transform-origin: center left;

  overflow-y: auto;
  height: 100%;
  max-width: 100%;

  &.active {
    margin-left: -450px;
    // transform: rotateY(100deg);
  }

  .author {
    border-bottom: 1px solid gray;
    .thumbnail {
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #e67e22;
      float: left;
      display: inline;
      img {
        width: auto;
        height: 100%;
      }
    }
  }

  li {
    display: block;
    width: 100%;
    margin: 10px 0;
    border-bottom: 2px solid white;
  }
}
</style>
