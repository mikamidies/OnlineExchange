<script setup>
import { ref } from "vue";

import InputDropdown from "~/components/InputDropdown.vue";
import CategoryDropdown from "~/components/CategoryDropdown.vue";
import MultiSelectDropdown from "~/components/MultiselectDropdown.vue";

const value = ref("");
const selectedFruits = ref([]);
</script>

<template>
  <div class="section">
    <div class="filterGrid">
      <div class="filterItem">
        <p class="filterPar">Category</p>
        <div class="filterWrap">
          <CategoryDropdown />
        </div>
      </div>

      <div class="filterItem">
        <p class="filterPar">Sub category</p>
        <div class="filterWrap">
          <MultiSelectDropdown
            v-model="selectedFruits"
            :options="['Apple', 'Banana', 'Cherry', 'Grapes']"
            placeholder="Select subcategory"
          />
        </div>
      </div>

      <div class="filterItem">
        <p class="filterPar">Price</p>
        <div class="filterWrap filterTwice">
          <InputDropdown
            v-model="value"
            :options="['100', '200', '300', '400']"
            placeholder="From:"
          />

          <InputDropdown
            v-model="value"
            :options="['100', '200', '300', '400']"
            placeholder="To:"
          />
        </div>
      </div>

      <div class="filterItem">
        <p class="filterPar">Sub category</p>
        <div class="filterWrap">
          <MultiSelectDropdown
            v-model="selectedFruits"
            :options="['Apple', 'Banana', 'Cherry', 'Grapes']"
            placeholder="Select subcategory"
          />
        </div>
      </div>

      <div class="filterItem">
        <p class="filterPar">Sub category</p>
        <div class="filterWrap">
          <MultiSelectDropdown
            v-model="selectedFruits"
            :options="['Apple', 'Banana', 'Cherry', 'Grapes']"
            placeholder="Select subcategory"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filterGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  border-bottom: 1px solid var(--light-green-2);
  padding-bottom: 24px;
}
.filterTwice {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.filterPar {
  margin-bottom: 6px;
  font-size: 14px;
}
</style>
