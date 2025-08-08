<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <NuxtLink to="/product">
    <div class="item">
      <div class="img">
        <img :src="product.img" alt="" />
      </div>
      <div class="content">
        <div class="top">
          <div class="topTop">
            <p class="name">{{ product.name }}</p>
            <p class="price">{{ product.price }}</p>
          </div>

          <div class="status">
            <p>New</p>
          </div>
        </div>

        <div class="bottom">
          <div class="info">
            <p class="address">Tashkent, Uzbekistan</p>
            <p class="date">10.02.2000</p>
          </div>

          <button class="like">
            <Icon icon="mdi:cards-heart-outline" />
          </button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.item {
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 216px 1fr;
  background: white;
  min-height: 144px;
}
.img {
  height: 144px;
  width: 100%;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.name {
  font-size: 20px;
  line-height: 22px;
}
.topTop,
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.price {
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin-top: 4px;
}
.address,
.date {
  font-size: 12px;
  color: var(--main-color);
}
.info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.like svg {
  width: 20px;
  height: 20px;
  display: flex;
}
.status {
  padding: 6px;
  background: var(--border);
  display: inline-block;
  border-radius: 4px;
  margin-top: 4px;
}
</style>
