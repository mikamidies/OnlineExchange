<template>
  <div ref="container" class="multi-select-dropdown">
    <div class="select-box" @click="toggleDropdown">
      <span v-if="selected.length">{{ selected.join(", ") }}</span>
      <span v-else class="placeholder">{{ placeholder }}</span>
      <Icon icon="mdi:chevron-down" />
    </div>

    <div v-if="open" class="dropdown">
      <label v-for="option in options" :key="option" class="option">
        <input type="checkbox" :value="option" v-model="selected" />
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  options: Array,
  modelValue: Array,
  placeholder: {
    type: String,
    default: "Select options...",
  },
});

const emit = defineEmits(["update:modelValue"]);

const selected = ref([...(props.modelValue || [])]);
const open = ref(false);
const container = ref(null);

function toggleDropdown() {
  open.value = !open.value;
}

function handleClickOutside(event) {
  if (!container.value.contains(event.target)) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

watch(selected, () => {
  emit("update:modelValue", selected.value);
});
</script>

<style scoped>
.multi-select-dropdown {
  position: relative;
  width: 100%;
  font-family: sans-serif;
  cursor: pointer;
}
.select-box {
  padding: 14px;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--main-font);
  font-size: 16px;
}
.select-box svg {
  width: 24px;
  height: 24px;
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
.option {
  padding: 14px;
  cursor: pointer;
  color: var(--grey);
  border-bottom: 1px solid var(--light-grey);
  display: flex;
  gap: 12px;
  align-items: center;
  font-family: var(--main-font);
}
.placeholder {
  color: var(--light-green-2);
}
</style>
