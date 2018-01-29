<template>
  <div class="wrapper">
    <div id="content">
        <button type="button" class="navbar-btn" v-on:click="slideMenu" id="action_button">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="post" v-if="selectedPost">
          <div class="title">
            <span>{{ $t("content.author") }} <strong>{{ selectedPost.data.author }}
            </strong> - {{ selectedPost.data.created_utc | moment("from") }}</span>
            <h1>{{ selectedPost.data.title }}</h1>
          </div>
          <div v-if="thumbnail">
            <img v-bind:src="selectedPost.data.thumbnail">
          </div>
          <div v-else-if="selectedPost.data.preview">
            <img v-bind:src="selectedPost.data.preview.images[0].source.url">
          </div>
          <a v-if="selectedPost.data.preview"
          v-bind:href="selectedPost.data.preview.images[0].source.url" target="_blank">
            {{ $t("content.image_fullsize") }}
          </a>
        </div>
        <div v-else>
          <img src="@/assets/placeholder-posts.png" alt="placeholder-posts"
          class="placeholder-posts">
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PostContent',
  beforeMount() {
    this.$store.commit('getPost');
  },
  methods: {
    slideMenu() {
      const actionButton = document.getElementsByClassName('navbar-btn')[0];
      const sideBar = document.getElementById('sidebar');
      actionButton.classList.toggle('active');
      sideBar.classList.toggle('active');
    },
  },
  computed: {
    selectedPost() {
      return this.$store.state.selectedPost;
    },
    thumbnail() {
      const regex = 'http';
      let thumbnail = this.selectedPost.data.thumbnail;

      if (thumbnail.indexOf(regex) !== 0) {
        thumbnail = '';
      }

      return thumbnail;
    },
  },
};
</script>

<style scoped lang="scss">
button {
  outline: 0;
  -moz-outline-style: none
}
.wrapper {
  position: relative;
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px 30px;
  height: 100vh;
  width: 100%;
  float: right;

  .title {
    margin: 14px 0 0;

    h1 {
      margin: 10px 0 50px;
      font-size: 32px;
    }

    span {
      opacity: .8;
      font-style: italic;
      font-size: 14px;
    }
  }

  img {
    max-width: 100%;
    min-width: 200px;
    max-height: calc(100vh - 300px);
  }
}

.post {
  a {
    display: inline-block;
    margin-top: 20px;
    color: #fc471e;
    padding: 4px 16px;
    border-radius: 10px;
    font-size: 14px;

    &:hover {
      color: #ffffff;
      background: #fc471e;
      text-decoration: none;
    }
  }
}
.navbar-btn {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 40px;
  height: 40px;
  background: #fc471e;
  border: 0;
  border-radius: 5px;
}

.navbar-btn span {
  width: 80%;
  height: 2px;
  margin: 0 auto;
  display: block;
  background: #fff;
  transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
}
.navbar-btn span:first-of-type {
  transform: rotate(45deg) translate(2px, 2px);
}
.navbar-btn span:nth-of-type(2) {
  opacity: 0;
}
.navbar-btn span:last-of-type {
  transform: rotate(-45deg) translate(1px, -1px);
}
.navbar-btn.active span {
  transform: none;
  opacity: 1;
  margin: 5px auto;
}
.placeholder-posts {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}

@media (max-width: 768px) {
  .wrapper {
    position: absolute;

    .title {
      h1 {
        font-size: 24px;
      }
    }
  }
  .navbar-btn {
    position: fixed;
    top: 15px;
    left: 15px;
  }
  .placeholder-posts {
    width: 90%;
  }
}
</style>
