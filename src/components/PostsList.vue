<template>
  <nav class="sidebar" id="sidebar">
    <div class="sidebar-header">
        {{ $t("sidebar.title") }}
    </div>

    <Loader/>
    <ul class="list-posts">
      <transition-group name="list-complete" tag="div" v-if="paginate.length > 0">
        <li v-for="(item, index) in paginate" v-on:click="selectPost(index,item.data.id)"
        :key="item.data.id" :id="item.data.id">
          <div class="new-post"></div>
          <div class="image-column">
            <div class="post-image">
              <img v-bind:src="item.data.thumbnail" alt="">
            </div>
            <button v-on:click="dismiss(index)" class="dismiss-single">
              {{ $t("sidebar.dismiss_single") }}
            </button>
          </div>
          <div class="info">
            <div class="action">›</div>
            <div class="author">
              {{ item.data.author }}
            </div>
            <span class="posted">
              {{ $t("sidebar.submitted") }} {{ item.data.created_utc | moment("from") }}
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
        </li>
      </transition-group>
      <transition-group name="list-complete" tag="div" v-else-if="noData">
        <div class="no-posts" :key="1">
          <h5>{{ $t("sidebar.no_posts") }}</h5>
          <h6>{{ $t("sidebar.reload_page") }}</h6>
        </div>
      </transition-group>

    </ul>

    <div class="row">
      <div class="paginate">
          <p v-for="pageNumber in totalPages" :key="pageNumber">
          <a v-bind:key="pageNumber" href="#" @click="setPage(pageNumber)"
          :class="{current: currentPage === pageNumber}">{{ pageNumber }}</a>
          </p>
      </div>
      <button href="javascript:;" v-on:click="dismissAll" class="dismiss-all">
        {{ $t("sidebar.dismiss_all") }}
      </button>
    </div>
  </nav>
</template>

<script>

import Loader from '@/components/Loader';
import PostContent from '@/components/PostContent';

export default {
  name: 'PostsView',
  components: { Loader, PostContent },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      resultCount: 50,
      noData: 0,
    };
  },
  beforeMount() {
    this.$store.commit('init');
  },
  methods: {
    selectPost(index, id) {
      const postItem = document.getElementById(id).getElementsByClassName('new-post')[0];
      postItem.classList.add('checked');

      const pageIndex = this.definePostIndex(index);
      this.selectedPost(pageIndex);
      this.mobileSlideSidebar();
    },
    selectedPost(index) {
      this.$store.commit('getPost', index);
    },
    dismiss(index) {
      this.newCurrentPage();
      const pageIndex = this.definePostIndex(index);
      this.$store.commit('dismiss', pageIndex);
      this.mobileSlideSidebar();
    },
    dismissAll() {
      this.$store.commit('dismissAll');
      this.noData = 1;
    },
    definePostIndex(index) {
      return ((this.currentPage * this.itemsPerPage) - this.itemsPerPage) + index;
    },
    setPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    updateResultCount() {
      this.resultCount = this.postList.length;
    },
    hideLoader() {
      document.getElementById('loader').style.display = 'none';
    },
    mobileSlideSidebar() {
      if (window.screen.availWidth <= 768) {
        const actionButton = document.getElementsByClassName('navbar-btn')[0];
        const sideBar = document.getElementById('sidebar');
        actionButton.classList.toggle('active');
        sideBar.classList.toggle('active');
      }
    },
    newCurrentPage() {
      if (this.currentPage === 0) {
        this.currentPage = 1;
      }
    },
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
    totalPages() {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
    paginate() {
      this.newCurrentPage();
      let index = (this.currentPage * this.itemsPerPage) - this.itemsPerPage;
      if (!this.postList) {
        return false;
      }
      if (index < 0) {
        index = 0;
      }
      this.updateResultCount();
      return this.postList.slice(index, index + this.itemsPerPage);
    },
  },
  updated() {
    this.hideLoader();
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
  overflow-x: hidden;
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

  .list-posts {
    height: calc(100vh - 110px);
    padding: 0;
    overflow-y: auto;
    margin: 0;
  }

  .list-complete-leave, .list-complete-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  li {
    position: relative;
    transition: all 500ms cubic-bezier(0.87, -0.76, 0.06, 1.47);
    float: left;
    display: block;
    left: 0;
    width: 100%;
    text-align: left;
    padding: 0 10px;
    pointer-events: auto;
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
      opacity: 1;
      z-index: 1;

      &.checked {
        opacity: 0;
      }
    }

    .image-column {
      display: inline-block;
      float: left;
      width: 40%;
      margin: 0 10px 0 0;

      .dismiss-single {
        display: block;
        margin: 12px 0;
        text-align: center;
        width: 100%;
        color: #fc471e;
        font-size: 12px;
        padding: 2px 0;
        border: 1px solid #fc471e;
        background: none;
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
        background-image: url('../assets/no-post-image.png');
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: center;
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
    width: 50%;
    padding: 7px 0;
    bottom: 0;
    background-color: #fc471e;
    border: 0;
    color: #fff;

    &:hover {
      text-decoration: none;
      background-color: #fd7259;
      color: #fff;
    }
  }

  .no-posts {
    transition: all 600ms ease-in-out;
    transition-delay: 500ms;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;

    h6 {
      font-weight: 100;
      font-size: 14px;
    }
  }
}

.paginate {
  display: inline-block;
  width: 50%;
  padding: 0 0 0 14px;
  text-align: left;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.25);

  a {
    display: inline-block;
    padding: 10px 12px;
    cursor: pointer;
    color: #fc471e;
    font-size: 12px;
    font-weight: 500;

    &:hover {
      text-decoration: none;
      background: #fc471e;
      color: #fff;
    }
  }
  .current {
    color: #fff;
    background: #fc471e;
  }

  p {
    display: inline;
    margin: 0 0 0 -1px;
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
