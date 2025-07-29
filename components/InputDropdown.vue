<template>
  <div ref="container" class="input-select">
    <input
      type="text"
      v-model="search"
      @focus="open = true"
      @keydown.enter.prevent="selectTyped"
      :placeholder="placeholder"
    />

    <ul v-if="open && filteredOptions.length" class="dropdown">
      <li
        v-for="option in filteredOptions"
        :key="option"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  options: Array,
  modelValue: String,
  placeholder: { type: String, default: "Type or select..." },
});

const emit = defineEmits(["update:modelValue"]);

const search = ref(props.modelValue || "");
const open = ref(false);
const container = ref(null);

watch(
  () => props.modelValue,
  (val) => {
    if (val !== search.value) search.value = val || "";
  }
);

const filteredOptions = computed(() => {
  return props.options.filter((opt) =>
    opt.toLowerCase().includes(search.value.toLowerCase())
  );
});

function selectOption(option) {
  search.value = option;
  emit("update:modelValue", option);
  open.value = false;
}

function selectTyped() {
  emit("update:modelValue", search.value);
  open.value = false;
}

function handleClickOutside(e) {
  if (!container.value.contains(e.target)) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.input-select {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.input-select input {
  width: 100%;
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 4px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown li {
  padding: 8px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f0f0f0;
}
</style>
