<script setup>
const containerRef = ref(null);
const swiper = useSwiper(containerRef);
onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
  <ClientOnly>
    <swiper-container ref="containerRef">
      <swiper-slide> Slide 1 </swiper-slide>
      <swiper-slide> Slide 2 </swiper-slide>
    </swiper-container>
  </ClientOnly>

  <button @click="swiper.prev()">Prev</button>
  <button @click="swiper.next()">Next</button>
</template>
