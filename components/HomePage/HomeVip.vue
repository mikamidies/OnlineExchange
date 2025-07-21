<script setup lang="ts">
import ProductCard from "../ProductCard.vue";
</script>

<template>
  <div class="component">
    <h4 class="title">VIP-posts</h4>
    <div class="items">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<style scoped>
.component {
  padding: 32px;
  background: var(--light-grey);
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
</style>
