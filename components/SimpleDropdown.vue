<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue"; // Если используешь Iconify

const showDropdown = ref(false);
const selectedOption = ref(null);

const categories = [
  { name: "Cars", color: "#ffce32" },
  { name: "Electronics", color: "#ff5636" },
  { name: "Fashion", color: "#36b37e" },
  { name: "Real Estate", color: "#4287f5" },
  { name: "Jobs", color: "#f542c5" },
];

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function selectCategory(category) {
  selectedOption.value = category;
  showDropdown.value = false;
}
</script>

<template>
  <div class="simple-dropdown">
    <div class="caller" @click="toggleDropdown">
      {{ selectedOption?.name || "Select Category" }}
      <Icon icon="mdi:chevron-down" />
    </div>

    <div v-if="showDropdown" class="dropdown">
      <div
        v-for="category in categories"
        :key="category.name"
        @click="selectCategory(category)"
        class="dropdown-item"
      >
        {{ category.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.simple-dropdown {
  position: relative;
  min-width: 220px;
}
.caller {
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--light-green-2);
}
.caller svg {
  color: var(--main-color);
  width: 24px;
  height: 24px;
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  padding: 16px;
  cursor: pointer;
  border-bottom: 1px solid var(--border);
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
