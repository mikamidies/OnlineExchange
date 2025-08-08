<script setup>
import HomeSearch from "~/components/HomePage/HomeSearch.vue";
import BaseBanner from "~/components/BaseBanner.vue";
</script>

<template>
  <div class="page">
    <div class="container">
      <HomeSearch class="innerSearch" />
      <BaseBanner />
    </div>
  </div>
</template>

<style scoped>
.page {
  background: var(--light-grey);
  padding: 24px 0 80px 0;
}
.innerSearch {
  padding: 0 0 32px 0;
  background: transparent;
}
</style>
