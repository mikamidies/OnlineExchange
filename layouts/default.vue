<script setup lang="ts">
import DesktopHeader from "~/components/Layout/DesktopHeader.vue";
</script>

<template>
  <div class="layout">
    <DesktopHeader />
    <slot />
  </div>
</template>
