<template>
  <div class="w-260px p-10px bg-#fff rd-4px mt-16px">
    <div class="flex grid-justify-between mb-5px pb-5px border-b-1 border-#e9eaed">
      <div class="inline-flex sider-title sider-title-6 relative">
        <n-icon
          size="20"
          class="mr-5px"
        >
          <PricetagsOutline />
        </n-icon>
        <div>标签云</div>
      </div>
      <div class="cursor-pointer hover-color-#1890ff">更多</div>
    </div>
    <div class="flex flex-wrap">
      <div
        v-for="(item, index) in 10"
        :key="index"
        :class="`color-${Math.floor(Math.random() * 8) + 1}`"
        class="b-rd-4px mt-10px mr-5px p-y-3px p-x-6px"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PricetagsOutline } from '@vicons/ionicons5'
</script>

<style scoped></style>
