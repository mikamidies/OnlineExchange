<script setup lang="ts">
import DesktopHeader from "~/components/Layout/DesktopHeader.vue";
import DesktopFooter from "~/components/Layout/DesktopFooter.vue";
</script>

<template>
  <div class="layout">
    <DesktopHeader />
    <slot />
    <DesktopFooter />
  </div>
</template>
