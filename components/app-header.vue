<template>
  <header class="h60px bg-white">
    <div class="w1200px mla mra h-full flex justify-between flex-items-center">
      <div class="flex flex-items-center">
        <common-global-logo width="45" />
      </div>
      <nav class="flex flex-item-center flex-justify-center flex-1">
        <n-menu
          mode="horizontal"
          :options="menuOptions"
        />

        <!--   @update:value="handleUpdateValue"     -->
      </nav>
      <div class="flex">
        <layout-header-search />
        <layout-header-github />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import type { Component } from 'vue'
import { NIcon } from 'naive-ui'

import { HomeOutline as HomeIcon } from '@vicons/ionicons5'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = ref([
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '前端',
    key: 'home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '后端',
    key: 'home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '工程化',
    key: 'home',
    icon: renderIcon(HomeIcon)
  }
  // {
  //   label:'归档',
  //   key: 'home',
  //   icon: renderIcon(HomeIcon)
  // },
  // {
  //   label:'作品',
  //   key: 'home',
  //   icon: renderIcon(HomeIcon)
  // },
  // {
  //   label:'关于',
  //   key: 'home',
  //   icon: renderIcon(HomeIcon)
  // },
])

// function handleUpdateValue(key: string, item: any) {
//   const keys = key
//   const items = item
//   if (keys) {
//     const a = ref(1)
//   } else if (items) {
//     const b = ref(2)
//   }
// }
</script>

<style scoped lang="scss">
.bg-white {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.nav {
  display: flex;
  flex: 1;
  align-items: center;
}
</style>
