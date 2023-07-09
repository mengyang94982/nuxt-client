<template>
  <div class="site">
    <template
      v-for="(item, index) in linkData"
      :key="item.label"
    >
      <NuxtLink :to="item.path">
        {{ item.label }}
      </NuxtLink>
      <n-divider
        v-if="index + 1 !== linkData.length"
        class="!c-#666666 !m-x-20px"
        vertical
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const linkData = ref([
  {
    label: '首页',
    key: 'home',
    path: '/'
  },
  {
    label: '友情链接',
    key: 'home',
    path: '/'
  },
  {
    label: '归档',
    key: 'home',
    path: '/'
  }
])
</script>

<style scoped></style>
