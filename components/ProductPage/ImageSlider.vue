<script setup>
const containerRef = ref(null);
const swiper = useSwiper(containerRef);
onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
  <div class="slider">
    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide>
          <div class="img">
            <img src="/public/assets/img/prod-1jpg.jpg" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img src="/public/assets/img/prod-2jpg.jpg" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img src="/public/assets/img/prod-3jpg.jpg" alt="" />
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <button class="prev" @click="swiper.prev()">
      <Icon icon="mdi:chevron-left"></Icon>
    </button>
    <button class="next" @click="swiper.next()">
      <Icon icon="mdi:chevron-right"></Icon>
    </button>
  </div>
</template>

<style scoped>
.slider {
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}
.img {
  height: 580px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  z-index: 2;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-grey);
  border-radius: 4px;
}
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  z-index: 2;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-grey);
  border-radius: 4px;
}
.prev svg,
.next svg {
  width: 40px;
  height: 40px;
}
</style>
