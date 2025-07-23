<script setup>
import BigBanner from "~/components/BigBanner.vue";
import HomeSearch from "~/components/HomePage/HomeSearch.vue";
import HomeCategories from "~/components/HomePage/HomeCategories.vue";
import HomeVip from "~/components/HomePage/HomeVip.vue";
import HomeSubscribe from "~/components/HomePage/HomeSubscribe.vue";
import HomeAbout from "~/components/HomePage/HomeAbout.vue";
import HomePopular from "~/components/HomePage/HomePopular.vue";
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
    <div class="index">
      <HomeSubscribe />
      <HomeAbout />
      <HomePopular />
    </div>
  </div>
</template>

<style scoped>
.body {
  background: white;
}
</style>
