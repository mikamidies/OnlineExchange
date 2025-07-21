<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="item">
    <div class="img">
      <img :src="product.img" alt="" />
    </div>
    <div class="content">
      <div class="top">
        <div>
          <p class="name">{{ product.name }}</p>
          <p class="price">{{ product.price }}</p>
        </div>

        <button class="like">
          <Icon icon="mdi:cards-heart-outline" />
        </button>
      </div>
      <div>
        <p class="address">Tashkent, Uzbekistan</p>
        <p class="date">10.02.2000</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  border-radius: 4px;
  overflow: hidden;
}
.img {
  height: 220px;
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
  background: white;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.name {
  font-size: 14px;
  line-height: 18px;
}
.top {
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 16px;
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
  color: #406367;
}
</style>
