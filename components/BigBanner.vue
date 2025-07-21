<template>
  <div class="component">
    <div class="image">
      <img src="/public/assets/img/ad.jpg" alt="" />
    </div>
    <div class="space"></div>
  </div>
</template>

<style scoped>
.image {
  width: 1920px;
  height: 1080px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.space {
  height: 300px;
}
</style>
