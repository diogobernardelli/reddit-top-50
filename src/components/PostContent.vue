<template>
  <div class="wrapper">
    <div id="content">
        <button type="button" class="navbar-btn">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="title">
          <span>Posted by <strong>washedupwornout</strong> - 25 hours ago</span>
          <h1>Fixing a toilet leak. I took 2 trips to Home Depot, worked with a hernia, had a pain in the ass time putting the wax ring and screws on...only to install the toilet and forgetting about the door. I'm an idiot.</h1>
        </div>

        <img src="http://i.imgur.com/IFtsInh.jpg" alt="">
    </div>
  </div>
</template>

<script>
$(document).ready(function () {
  $('.navbar-btn').on('click', function () {
    $('.sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });
});

export default {
  name: 'PostContent',
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
    max-height: calc(100vh - 300px);
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
}
</style>
