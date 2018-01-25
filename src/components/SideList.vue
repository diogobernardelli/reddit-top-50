<template>
  <nav class="sidebar">
    <div class="sidebar-header">
        {{ $t("sidebar.title") }}
    </div>

    <ul class="list-unstyled components">
      <li v-for="item in post_list">
        <div class="new-post"></div>
        <div class="image-column">
          <div class="post-image">
            <img v-bind:src="item.data.url" alt="">
          </div>
          <a href="javascript:;" class="dismiss-single">
            {{ $t("sidebar.dismiss_single") }}
          </a>
        </div>
        <div class="info">
          <div class="action">›</div>
          <div class="author">
            <div class="thumbnail">
              <img v-bind:src="item.data.thumbnail" alt="">
            </div>
            {{ item.data.author }}
          </div>
          <span class="posted">
            {{ $t("sidebar.submitted") }} {{ item.data.created }} {{ $t("sidebar.time") }}
          </span>
          <strong class="title">{{ item.data.title }}</strong>
          <div class="row">
            <div class="score">
              <vue-material-icon name="arrow_upward" :size="14"></vue-material-icon>
              <vue-material-icon name="arrow_downward" :size="14"></vue-material-icon>
              <span>{{ item.data.score }}</span>
            </div>
            <div class="comments">
              <vue-material-icon name="forum" :size="14"></vue-material-icon>
              <span>{{ item.data.num_comments }} {{ $t("sidebar.comments") }}</span>
            </div>
          </div>
        </div>
        <!-- <a v-bind:href="item.data.permalink" target="_blank" >link aqui</a> -->
      </li>
    </ul>

    <a href="javascript:;" class="dismiss-all">
      {{ $t("sidebar.dismiss_all") }}
    </a>
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
        });
      });
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  position: relative;
  width: 450px;
  min-width: 450px;
  max-width: 450px;
  background: #2c3e50;
  color: #fff;
  transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
  overflow-y: auto;
  height: 100%;
  display: inline-block;
  float: left;
  margin: 0;

  &.active {
    margin: 0 0 0 -450px;
  }

  .sidebar-header {
    display: block;
    top: 0;
    width: 100%;
    padding: 15px 20px;
    margin: 0;
    background: #fc471e;
    font-size: 30px;
    font-weight: 100;
    text-transform: uppercase;
    z-index: 3;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.35);
  }

  ul {
    height: calc(100vh - 110px);
    overflow-y: auto;
    margin: 0;
  }

  li {
    position: relative;
    float: left;
    display: block;
    width: 100%;
    text-align: left;
    padding: 0 10px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, .06);

    .action {
      position: absolute;
      top: 50%;
      right: 12px;
      color: #fff;
      font-size: 34px;
      opacity: .8;
      transform: translate(0, -50%);
    }

    &:hover {
      background-color: #34495e;

      .action {
        right: 5px;
      }
    }

    .new-post {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 40px 40px 0 0;
      border-color: #27ae60 transparent transparent transparent;
      z-index: 1;
    }

    .image-column {
      display: inline-block;
      float: left;
      width: 40%;
      margin: 0 10px 0 0;

      a {
        display: block;
        margin: 12px 0;
        text-align: center;
        width: 100%;
        color: #fc471e;
        font-size: 12px;
        padding: 2px 0;
        border: 1px solid #fc471e;
        border-radius: 10px;

        &:hover {
          text-decoration: none;
          background: #fc471e;
          color: #fff;
        }
      }

      .post-image {
        position: relative;
        width: 100%;
        height: 160px;
        overflow: hidden;
        margin: 15px 0 0;
        border: 1px solid rgba(255, 255, 255, .2);

        img {
          min-width: 100%;
          height: 100%;
        }
      }
    }

    .info {
      display: inline-block;
      width: calc(100% - 50%);
    }

    .author {
      margin: 15px 0 0;
      font-size: 12px;

      .thumbnail {
        position: relative;
        float: left;
        display: inline;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background-image: url('../assets/no-user-thumbnail.png');
        background-size: 30px;
        margin: 0 10px 0 0;

        img {
          width: auto;
          height: 100%;
        }
      }

      font-size: 14px;
      font-weight: 700;
      line-height: 1;

    }

    .posted {
      display: block;
      font-size: 12px;
      font-style: italic;
    }

    .title {
      display: block;
      margin: 10px 0 0;
      font-size: 14px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      margin: 10px 0 15px 0;

      .score, .comments {
        display: flex;
        font-size: 10px;
        font-weight: 500;

        span {
          margin: 0 0 0 5px;
        }
      }
    }

    .score {
      font-size: 10px;
    }

    .comments {
      text-transform: uppercase;
      color: #fc471e;
    }
  }

  .dismiss-all {
    display: block;
    padding: 7px 0;
    bottom: 0;
    background-color: #34495e;
    color: #fc471e;
    width: 100%;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.25);

    &:hover {
      text-decoration: none;
      background-color: #fc471e;
      color: #fff;
    }
  }
}

@media (max-width: 768px) {
  .sidebar {
    position: relative;
    z-index: 1;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
  .sidebar.active {
    margin-left: -100%;
  }
}
</style>
