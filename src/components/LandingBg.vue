<template>
  <!-- TODO: Add floating cell + circle animations -->
  <div class="bg-image">
    <img class="circles-right circle-spin" src="@/assets/circles.svg" alt="">
    <div class="circle-mask"></div>
    <img class="circles circle-spin" src="@/assets/circles.svg" alt="">
    <!-- <img src="@/assets/home_bg_flat.png" alt=""> -->
    <!-- TODO: remove flat BG after adding animations -->
    <img src="@/assets/blue-bg.png" alt="" class="blue-part">
    <img src="@/assets/home-white-bg.png" alt="" class="white-part">
    <img class="cart-cell sassy-cart-t-top top" src="@/assets/car-t-cell.png" alt="">
    <img class="cart-cell sassy-cart-t-left left" src="@/assets/car-t-cell.png" alt="">
    <img class="cart-cell sassy-cart-t-right right" src="@/assets/car-t-cell.png" alt="">
  </div>
</template>

<script>
export default {
  name: "LandingBg"
};
</script>

<style lang="scss" scoped>
.bg-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;

  .circles {
    position: absolute;
    top: -10%;
    left: -90px;
    z-index: 5;
    width: 60%;
  }

  .circles-right {
    position: absolute;
    top: -50%;
    right: -40%;
    z-index: 20;
    width: 60%;
  }

  .circle-mask {
    width: 1500px;
    height: 1500px;
    transform: rotate(-25deg);
    background-color: $white;
    position: absolute;
    top: -50rem;
    left: 67rem;
    z-index: 10;
  }

  .blue-part {
    float: left;
  }

  .white-part {
    position: absolute;
    right: 0;
    z-index: 15;
  }

  .cart-cell {
    position: absolute;

    &.top {
      top: -80px;
      left: 253px;
      z-index: 20;
    }

    &.left {
      left: -251px;
      bottom: -479px;
      width: 87rem;
      height: auto;
      z-index: 20;
    }

    &.right {
      right: -80px;
      bottom: -161px;
      z-index: 20;
    }
  }

  .circle-spin {
    animation: spin 20s infinite linear;
  }

  .sassy-cart-t-top {
    animation: sassy 20s infinite ease-in-out;
  }

  .sassy-cart-t-left {
    animation: sassy 30s infinite ease-in-out;
  }

  .sassy-cart-t-right {
    animation: sassy 15s infinite ease-in-out;
  }  

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  @keyframes sassy {
    0% {
      transform: scale(1) translate(0, 0) rotate(0deg);
    }
    50% {
      transform: scale(1.05) translate(45px, -33px) rotate(12deg);
    }
    100% {
      transform: scale(1)translate(0, 0) rotate(0deg);
    }
  }
}
</style>

