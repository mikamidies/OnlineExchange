<script setup lang="ts">
import BigBanner from "~/components/BigBanner.vue";
</script>

<template>
  <div class="page">
    <BigBanner />
    <div class="container">
      <div class="body">
        <div class="search">
          <form>
            <div class="input">
              <Icon icon="mdi:search" />
              <input type="text" placeholder="Input your request" />
            </div>
            <div class="region">
              <Icon icon="mdi:map-marker-outline" />
              <p>Tashkent</p>
            </div>
            <button class="submit">Search <Icon icon="mdi:search" /></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("/public/assets/css/search.css");

.body {
  background: white;
}
</style>
