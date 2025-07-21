<script setup lang="ts">
import BigBanner from "~/components/BigBanner.vue";
import HomeSearch from "~/components/HomePage/HomeSearch.vue";
import HomeCategories from "~/components/HomePage/HomeCategories.vue";
import HomeVip from "~/components/HomePage/HomeVip.vue";
</script>

<template>
  <div class="page">
    <BigBanner />
    <div class="container">
      <div class="body">
        <HomeSearch />
        <HomeCategories />
        <HomeVip />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  background: white;
}
</style>
