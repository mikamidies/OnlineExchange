<template>
  <div ref="container" class="multi-select-dropdown">
    <div class="select-box" @click="toggleDropdown">
      <span v-if="selected.length">{{ selected.join(", ") }}</span>
      <span v-else class="placeholder">{{ placeholder }}</span>
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
  max-width: 300px;
  font-family: sans-serif;
}

.select-box {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

.placeholder {
  color: #aaa;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  margin-top: 2px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.option {
  display: block;
  margin-bottom: 6px;
  cursor: pointer;
}
</style>
