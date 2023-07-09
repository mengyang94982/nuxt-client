<template>
  <common-hover-container
    tooltip-content="搜索"
    @click="handleSearch"
  >
    <n-icon
      class="mr20px cursor-pointer"
      size="25"
      :component="SearchOutline"
    />
  </common-hover-container>
  <layout-search-modal v-model:value="show" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SearchOutline } from '@vicons/ionicons5'

const show = ref(false)

function handleSearch() {
  show.value = true
}
</script>

<style scoped></style>
