<template>
  <div class="default">
    <app-header />
    <main>
      <div class="w-1200px m-x-auto flex grid-justify-between mt-24px">
        <slot></slot>
        <app-sider />
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppSider from '~/components/app-sider.vue'
</script>

<style scoped></style>
