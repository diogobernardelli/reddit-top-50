<template>
  <div class="loader" id="loader">
    <div class="loader-item1"/>
    <div class="loader-item2"/>
    <div class="loader-item3"/>
    <div class="loader-item4"/>
    <div class="loader-item5"/>
    <div class="loader-item6"/>
    <div class="loader-item7"/>
    <div class="loader-item8"/>
    <div class="loader-item9"/>
    <div class="loader-item10"/>
    <div class="loader-item11"/>
    <div class="loader-item12"/>
  </div>
</template>

<script>

export default {
  name: 'Loader',
};
</script>

<style lang="scss">
.loader {
  width: 80px;
  height: 80px;
  opacity: .6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: #fff;
      border-radius: 100%;
      -webkit-animation: loader-itemBounceDelay 1.2s infinite ease-in-out both;
      animation: loader-itemBounceDelay 1.2s infinite ease-in-out both;
    }
  }

  .loader-item2 {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
    &:before {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
  }
  .loader-item3 {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
    &:before {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
  }
  .loader-item4 {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    &:before {
      -webkit-animation-delay: -.9s;
      animation-delay: -.9s;
    }
  }
  .loader-item5 {
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg);
    &:before {
      -webkit-animation-delay: -.8s;
      animation-delay: -.8s;
    }
  }
  .loader-item6 {
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg);
    &:before {
      -webkit-animation-delay: -.7s;
      animation-delay: -.7s;
    }
  }
  .loader-item7 {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    &:before {
      -webkit-animation-delay: -6s;
      animation-delay: -.6s;
    }
  }
  .loader-item8 {
    -webkit-transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(210deg);
    &:before {
      -webkit-animation-delay: -.5s;
      animation-delay: -.5s;
    }
  }
  .loader-item9 {
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg);
    &:before {
      -webkit-animation-delay: -.4s;
      animation-delay: -.4s;
    }
  }
  .loader-item10 {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    &:before {
      -webkit-animation-delay: -.3s;
      animation-delay: -.3s;
    }
  }
  .loader-item11 {
    -webkit-transform: rotate(300deg);
    -ms-transform: rotate(300deg);
    transform: rotate(300deg);
    &:before {
      -webkit-animation-delay: -.2s;
      animation-delay: -.2s;
    }
  }
  .loader-item12 {
    -webkit-transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    transform: rotate(330deg);
    &:before {
      -webkit-animation-delay: -.1s;
      animation-delay: -.1s;
    }
  }
}

@-webkit-keyframes loader-itemBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
      transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
      transform: scale(1);
  }
}

@keyframes loader-itemBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
      transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
      transform: scale(1);
  }
}
</style>
