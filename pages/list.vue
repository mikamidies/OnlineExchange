<script setup>
import { ref } from "vue";

import BigBanner from "~/components/BigBanner.vue";
import HomeSearch from "~/components/HomePage/HomeSearch.vue";
import InputDropdown from "~/components/InputDropdown.vue";
import CategoryDropdown from "~/components/CategoryDropdown.vue";
import MultiSelectDropdown from "~/components/MultiselectDropdown.vue";

const value = ref("");
const selectedFruits = ref([]);
</script>

<template>
  <div class="page">
    <BigBanner />
    <div class="container">
      <div class="body">
        <HomeSearch />
        <div class="like">
          <button>
            <Icon icon="mdi:heart-outline" />
            Add to favorites
          </button>
        </div>
        <div class="filter">
          <CategoryDropdown />

          <div>
            <InputDropdown
              v-model="value"
              :options="['Tashkent', 'Samarkand', 'Fergana', 'Namangan']"
              placeholder="Enter city or choose"
            />
            <p>Вы выбрали: {{ value }}</p>
          </div>

          <div>
            <MultiSelectDropdown
              v-model="selectedFruits"
              :options="['Apple', 'Banana', 'Cherry', 'Grapes']"
              placeholder="Выбери фрукты"
            />
            <p>Ты выбрал: {{ selectedFruits }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
