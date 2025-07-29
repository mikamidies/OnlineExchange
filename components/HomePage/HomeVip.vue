<script setup>
import ProductCard from "../ProductCard.vue";

const products = [
  {
    id: 2,
    name: "Samsung Galaxy Z Fold 7 Original Karobka Dakumentlar Bilan",
    price: "$1200",
    img: "/assets/img/prod-2.jpg",
    address: "Tashkent, Uzbekistan",
    date: "11.02.2000",
  },
  {
    id: 4,
    name: "XBOX Series S Абсолютно Новая Белая Как Снег",
    price: "$200",
    img: "/assets/img/prod-4.jpg",
    address: "Tashkent, Uzbekistan",
    date: "13.02.2000",
  },
  {
    id: 5,
    name: "Chevrolet Lacetti Gentra 2020 Yil 4 pazitsiya Avtamat Karobka",
    price: "$15000",
    img: "/assets/img/prod-5.jpg",
    address: "Tashkent, Uzbekistan",
    date: "14.02.2000",
  },
  {
    id: 6,
    name: "MacBook Air M3 Midnight 2023 8/256",
    price: "$900",
    img: "/assets/img/prod-6.jpg",
    address: "Tashkent, Uzbekistan",
    date: "15.02.2000",
  },
  {
    id: 7,
    name: "Kangal Turk 2 yosh Erkak",
    price: "$500",
    img: "/assets/img/prod-7.jpg",
    address: "Tashkent, Uzbekistan",
    date: "16.02.2000",
  },
  {
    id: 8,
    name: "Misrda eng shinam uy",
    price: "$50",
    img: "/assets/img/prod-8.jpg",
    address: "Tashkent, Uzbekistan",
    date: "17.02.2000",
  },
];
</script>

<template>
  <div class="component">
    <h4 class="title">VIP-posts</h4>
    <div class="items">
      <ProductCard v-for="item in products" :key="item.id" :product="item" />
    </div>
  </div>
</template>

<style scoped>
.component {
  padding: 32px 32px 56px 32px;
  background: var(--light-grey);
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
</style>
