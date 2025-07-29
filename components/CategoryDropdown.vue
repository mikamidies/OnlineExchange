<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showDropdown = ref(false);
const regions = [
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
];
const selectedRegion = ref(null);
const selectedCity = ref(null);
const currentCities = ref([]);
const isCityLevel = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
  if (showDropdown.value) {
    isCityLevel.value = false;
    selectedRegion.value = null;
  }
}

function selectRegion(region) {
  selectedRegion.value = region.name;
  currentCities.value = region.subcategories;
  isCityLevel.value = true;
}

function selectCity(city) {
  selectedCity.value = city;
  showDropdown.value = false;
  isCityLevel.value = false;
}

function backToRegions() {
  isCityLevel.value = false;
  selectedRegion.value = null;
}
</script>

<template>
  <div class="component" @click="toggleDropdown">Select Category</div>

  <div v-if="showDropdown" id="region-dropdown" class="dropdown">
    <template v-if="!isCityLevel">
      <div
        v-for="region in regions"
        :key="region.name"
        @click="selectRegion(region)"
        class="dropdown-item"
      >
        {{ region.name }}
        <Icon icon="material-symbols-light:chevron-right-rounded" />
      </div>
    </template>
    <template v-else>
      <div @click="backToRegions" class="dropdown-header">
        <Icon icon="material-symbols-light:chevron-left-rounded" />
        Back to category
      </div>
      <div
        v-for="city in currentCities"
        :key="city"
        @click="selectCity(city)"
        class="dropdown-item"
      >
        {{ city.name }}
      </div>
    </template>
  </div>
</template>
