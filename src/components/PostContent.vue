<template>
  <div class="wrapper">
    <div id="content">
        <button type="button" id="sidebarCollapse" class="navbar-btn">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <vue-material-icon name="favorite" :size="32"></vue-material-icon>
        Material Design with Vue.js 2 Demo

        <p v-for="item in post_list">
          {{ item }}
        </p>

        <p>{{ $t("message.hello") }}</p>
    </div>
  </div>
</template>

<script>
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

export default {
  name: 'PostContent',
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

<style scoped lang="scss">
.wrapper {
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px 30px;
  height: 100%;
  width: 100%;
  img {
    width: 100px;
  }
}
#sidebarCollapse {
    width: 40px;
    height: 40px;
    background: #f5f5f5;
}

#sidebarCollapse span {
    width: 80%;
    height: 2px;
    margin: 0 auto;
    display: block;
    background: #555;
    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
}
#sidebarCollapse span:first-of-type {
    /* rotate first one */
    transform: rotate(45deg) translate(2px, 2px);
}
#sidebarCollapse span:nth-of-type(2) {
    /* second one is not visible */
    opacity: 0;
}
#sidebarCollapse span:last-of-type {
    /* rotate third one */
    transform: rotate(-45deg) translate(1px, -1px);
}
#sidebarCollapse.active span {
    /* no rotation */
    transform: none;
    /* all bars are visible */
    opacity: 1;
    margin: 5px auto;
}
</style>
