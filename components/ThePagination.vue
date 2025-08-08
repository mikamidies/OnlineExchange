<template>
  <div class="component">
    <button
      :disabled="modelValue === 1"
      @click="changePage(modelValue - 1)"
      class="button prev"
    >
      Prev
    </button>

    <button
      v-for="page in pages"
      :key="page"
      @click="changePage(page)"
      :class="['button', modelValue === page ? 'active' : '']"
    >
      {{ page }}
    </button>

    <button
      :disabled="modelValue === props.totalPages"
      @click="changePage(modelValue + 1)"
      class="button next"
    >
      Next
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const changePage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("update:modelValue", page);
  }
};

const pages = computed(() => {
  return Array.from({ length: props.totalPages }, (_, i) => i + 1);
});
</script>

<style scoped>
.component {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
