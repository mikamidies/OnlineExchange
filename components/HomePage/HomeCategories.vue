<script setup>
const categories = [
  {
    name: "Cars",
    img: "/assets/img/cat-1.png",
    color: "#ffce32",
    subcategories: [
      { name: "Light cars" },
      { name: "Heavy trucks" },
      { name: "Buses" },
      { name: "Motorcycles" },
      { name: "Spare parts" },
    ],
  },
  {
    name: "Electronics",
    img: "/assets/img/cat-2.png",
    color: "#ff5636",
    subcategories: [
      { name: "Phones" },
      { name: "Laptops" },
      { name: "Tablets" },
      { name: "Accessories" },
    ],
  },
  {
    name: "Fashion",
    img: "/assets/img/cat-3.png",
    color: "#36b37e",
    subcategories: [
      { name: "Clothing" },
      { name: "Footwear" },
      { name: "Accessories" },
    ],
  },
  {
    name: "Home & Garden",
    img: "/assets/img/cat-4.png",
    color: "#6554c0",
    subcategories: [
      { name: "Furniture" },
      { name: "Kitchenware" },
      { name: "Gardening" },
    ],
  },
  {
    name: "Sports",
    img: "/assets/img/cat-5.png",
    color: "#00c7e6",
    subcategories: [
      { name: "Fitness" },
      { name: "Outdoor" },
      { name: "Cycling" },
    ],
  },
  {
    name: "Toys",
    img: "/assets/img/cat-6.png",
    color: "#ff8b00",
    subcategories: [
      { name: "Kids' toys" },
      { name: "Educational toys" },
      { name: "Games" },
    ],
  },
  {
    name: "Health & Beauty",
    img: "/assets/img/cat-7.png",
    color: "#ff5636",
    subcategories: [
      { name: "Cosmetics" },
      { name: "Skincare" },
      { name: "Wellness" },
    ],
  },
  {
    name: "Animals",
    img: "/assets/img/cat-8.png",
    color: "#36b37e",
    subcategories: [
      { name: "Pets" },
      { name: "Pet food" },
      { name: "Pet accessories" },
    ],
  },
  {
    name: "Real Estate",
    img: "/assets/img/cat-9.png",
    color: "#6554c0",
    subcategories: [
      { name: "Apartments" },
      { name: "Houses" },
      { name: "Commercial properties" },
    ],
  },
  {
    name: "Automotive",
    img: "/assets/img/cat-10.png",
    color: "#ff8b00",
    subcategories: [
      { name: "Paints" },
      { name: "Brushes" },
      { name: "Glues" },
      { name: "Tools" },
    ],
  },
];

const category_1 = categories.slice(0, 8);
const category_2 = categories.slice(8, 12);

const activeCategory = ref(null);
const dropdownRowIndex = ref(null);
const arrowOffset = ref(0);
const container = ref();

function openDropdown(item, rowIndex, event) {
  const isSameCategory =
    activeCategory.value?.name === item.name &&
    dropdownRowIndex.value === rowIndex;

  if (isSameCategory) {
    activeCategory.value = null;
    dropdownRowIndex.value = null;
    return;
  }

  activeCategory.value = item;
  dropdownRowIndex.value = rowIndex;

  const btnRect = event.currentTarget.getBoundingClientRect();
  const containerRect = container.value.getBoundingClientRect();
  arrowOffset.value = btnRect.left + btnRect.width / 2 - containerRect.left;
}
</script>

<template>
  <div class="categories component" ref="container">
    <h4 class="title">Categories</h4>

    <div class="items" ref="row0" id="row0">
      <div
        v-for="(item, index) in category_1"
        :key="index"
        class="item"
        @click="openDropdown(item, 0, $event)"
      >
        <button class="link" type="button">
          <div :style="{ backgroundColor: item.color }" class="img">
            <img :src="item.img" alt="" />
          </div>
          <p class="name">{{ item.name }}</p>
        </button>
      </div>
    </div>

    <div
      v-if="activeCategory && dropdownRowIndex === 0"
      class="dropdown"
      :style="{ '--arrow-left': arrowOffset + 'px' }"
    >
      <div class="dropdown-arrow" />
      <div class="all">
        <NuxtLink to="/list">
          <Icon icon="material-symbols-light:chevron-right-rounded" />
          <p>All in this category</p>
        </NuxtLink>
      </div>
      <div class="list">
        <NuxtLink
          v-for="sub in activeCategory.subcategories"
          :key="sub.name"
          to="/list"
        >
          <Icon icon="material-symbols-light:chevron-right-rounded" />
          <p>{{ sub.name }}</p>
        </NuxtLink>
      </div>
    </div>

    <div class="items" ref="row1">
      <div
        v-for="(item, index) in category_2"
        :key="index"
        class="item"
        @click="openDropdown(item, 1, $event)"
      >
        <button class="link" type="button">
          <div :style="{ backgroundColor: item.color }" class="img">
            <img :src="item.img" alt="" />
          </div>
          <p class="name">{{ item.name }}</p>
        </button>
      </div>
    </div>

    <div
      v-if="activeCategory && dropdownRowIndex === 1"
      class="dropdown"
      :style="{ '--arrow-left': arrowOffset + 'px' }"
    >
      <div class="dropdown-arrow" />
      <div class="all">
        <NuxtLink to="/list">
          <Icon icon="material-symbols-light:chevron-right-rounded" />
          <p>All in this category</p>
        </NuxtLink>
      </div>
      <div class="list">
        <NuxtLink
          v-for="sub in activeCategory.subcategories"
          :key="sub.name"
          to="/list"
        >
          <Icon icon="material-symbols-light:chevron-right-rounded" />
          <p>{{ sub.name }}</p>
        </NuxtLink>
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
  position: relative;
}
.categories .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.categories .link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
}
.categories .item a:hover .name {
  background-color: var(--main-color);
  color: white;
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
  padding: 0 4px;
}
.dropdown svg {
  width: 28px;
  height: 28px;
}
.dropdown .all a {
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  border-bottom: 1px solid var(--light-grey);
}
.list {
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.list a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  color: var(--grey);
}
.dropdown {
  position: relative;
  z-index: 10;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 16px 0;
  padding: 16px;
  transition: 0.4s;
}
.dropdown-arrow {
  position: absolute;
  z-index: 8;
  top: -6px;
  left: var(--arrow-left);
  width: 12px;
  height: 12px;
  background: white;
  transform: rotate(45deg) translate(-26px, 26px);
  box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.1);
}
#row0 {
  margin-bottom: 40px;
}
</style>
