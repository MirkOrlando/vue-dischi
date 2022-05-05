<template>
  <div
    class="loading min-vh-100 d-flex align-items-center justify-content-center"
  >
    <h6 class="text-center m-0 me-1">Loarding Records</h6>
    <div class="loading-container m-1">
      <div class="dot1"></div>
      <div class="dot2"></div>
      <div class="dot3"></div>
      <div class="dot4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
};
</script>

<style lang="scss" scoped>
h6 {
  color: $lightestColor;
}
.loading-container {
  aspect-ratio: 1/1;
  width: 30px;
  position: relative;
  /* border: 4px solid white; */

  [class^="dot"] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1/1;
    width: 10px;
    border-radius: 50%;
    background-color: #1ed760;
    /* animation: loadingDots 1s; */
  }
  .dot1 {
    animation: loadingDot1 2s infinite;
  }
  .dot2 {
    animation: loadingDot2 2s infinite;
  }
  .dot3 {
    animation: loadingDot3 2s infinite;
  }
  .dot4 {
    animation: loadingDot4 2s infinite;
  }
}
@keyframes loadingDot1 {
  33% {
    top: 0;
    left: 0;
    transform: unset;
  }
  66% {
    top: 0;
    left: 100%;
    transform: unset;
  }
  100% {
    top: 50;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@keyframes loadingDot2 {
  33% {
    top: 0;
    left: 100%;
    transform: unset;
  }
  66% {
    top: 100%;
    left: 100%;
    transform: unset;
  }
  100% {
    top: 50;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@keyframes loadingDot3 {
  33% {
    top: 100%;
    left: 100%;
    transform: unset;
  }
  66% {
    top: 100%;
    left: 0;
    transform: unset;
  }
  100% {
    top: 50;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@keyframes loadingDot4 {
  33% {
    top: 100%;
    left: 0;
    transform: unset;
  }
  66% {
    top: 0;
    left: 0;
    transform: unset;
  }
  100% {
    top: 50;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>