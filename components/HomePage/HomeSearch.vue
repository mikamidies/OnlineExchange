<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showDropdown = ref(false);
const regions = [
  { name: "Tashkent", cities: ["Yunusabad", "Chilonzor", "Mirzo-Ulugbek"] },
  { name: "Samarkand", cities: ["Registan", "Siyob", "Afrosiyob"] },
  { name: "Bukhara", cities: ["Old City", "Kagan", "Gijduvan"] },
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
  currentCities.value = region.cities;
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
  <div class="component search">
    <form>
      <div class="input">
        <Icon icon="mdi:search" />
        <input type="text" placeholder="Input your request" />
      </div>
      <div class="region" style="position: relative">
        <button class="region_btn" type="button" @click="toggleDropdown">
          <Icon icon="mdi:map-marker-outline" />
          <p>Choose region:</p>
        </button>

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
              Back to regions
            </div>
            <div
              v-for="city in currentCities"
              :key="city"
              @click="selectCity(city)"
              class="dropdown-item"
            >
              {{ city }}
            </div>
          </template>
        </div>
      </div>
      <button class="submit" type="submit">
        Search <Icon icon="mdi:search" />
      </button>
    </form>
  </div>
</template>

<style scoped>
.search {
  background: var(--light-grey);
  padding: 32px;
  position: relative;
  border-radius: 8px 8px 0 0;
}
.search form {
  display: grid;
  grid-template-columns: 60% 28% 12%;
  border-radius: 8px;
}
.search .input {
  display: flex;
  align-items: center;
  background: white;
  padding-left: 30px;
  border-right: 1px solid var(--light-grey);
  border-radius: 8px 0 0 8px;
}
.search input {
  padding: 20px 30px 20px 12px;
  width: 100%;
}
.search input::placeholder {
  color: var(--light-green-2);
}
.search svg {
  width: 32px;
  height: 32px;
  display: flex;
}
.submit {
  background: var(--main-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: 600;
  border-radius: 0 8px 8px 0;
}
.region {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
}
.region_btn {
  gap: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;
  color: var(--grey);
}
.region_btn p {
  margin: 0;
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
  padding: 16px 24px;
  cursor: pointer;
  color: var(--grey);
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
  padding: 16px 24px;
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
  width: 28px;
  height: 28px;
}
</style>
