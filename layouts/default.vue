<script setup lang="ts">
import DesktopHeader from "~/components/Layout/DesktopHeader.vue";
import DesktopFooter from "~/components/Layout/DesktopFooter.vue";
</script>

<template>
  <div class="layout">
    <DesktopHeader class="header" />
    <div class="slot">
      <slot />
    </div>
    <DesktopFooter class="footer" />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.header {
  min-height: 50px;
}
.footer {
  min-height: 50px;
}
.slot {
  flex: 1;
}
</style>
