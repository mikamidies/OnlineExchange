<script setup>
const categories = [
  { name: "Cars", img: "/assets/img/cat-1.png", color: "#ffce32" },
  { name: "Electronics", img: "/assets/img/cat-2.png", color: "#ff5636" },
  { name: "Fashion", img: "/assets/img/cat-3.png", color: "#36b37e" },
  { name: "Home & Garden", img: "/assets/img/cat-4.png", color: "#6554c0" },
  { name: "Sports", img: "/assets/img/cat-5.png", color: "#00c7e6" },
  { name: "Toys", img: "/assets/img/cat-6.png", color: "#ff8b00" },
  { name: "Health & Beauty", img: "/assets/img/cat-7.png", color: "#ff5636" },
  { name: "Animals", img: "/assets/img/cat-8.png", color: "#36b37e" },
];
</script>

<template>
  <div class="categories component">
    <h4 class="title">Categories</h4>
    <div class="items">
      <div v-for="item in categories" :key="item.id" class="item">
        <div :style="{ backgroundColor: item.color }" class="img">
          <img :src="item.img" alt="" />
        </div>
        <p class="name">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories {
  padding: 32px;
}
.categories .items {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 12px;
  row-gap: 40px;
}
.categories .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
}
.categories .img {
  width: 88px;
  height: 88px;
  border-radius: 50%;
}
.categories .name {
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}
</style>
