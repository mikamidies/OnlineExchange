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
  <div class="component">
    <div class="caller" @click="toggleDropdown">
      Select Category <Icon icon="mdi:chevron-down" />
    </div>
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
  </div>
</template>

<style scoped>
.component {
  background: white;
  padding: 14px;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
}
.component svg {
  width: 24px;
  height: 24px;
  color: var(--main-color);
}
.caller {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--light-green-2);
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
.dropdown-item {
  padding: 12px 14px;
  cursor: pointer;
  border-bottom: 1px solid var(--light-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dropdown-item:last-child {
  border-bottom: none;
}
.dropdown-item:hover {
  background: var(--light-grey);
}
.dropdown-header {
  padding: 12px 14px;
  cursor: pointer;
  color: var(--main-color);
  font-weight: bold;
  border-bottom: 1px solid var(--light-grey);
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
}
.dropdown svg {
  width: 24px;
  height: 24px;
}
</style>
