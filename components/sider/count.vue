<template>
  <div class="w-260px p-10px bg-#fff rd-4px mt-16px">
    <div class="mb-5px pb-5px border-b-1 border-#e9eaed">
      <div class="inline-flex sider-title relative">
        <n-icon
          size="20"
          class="mr-5px"
        >
          <AppsSharp />
        </n-icon>
        <div>站点统计</div>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-40% text-12px mt-10px">标签：154个</div>
      <div class="w-40% text-12px mt-10px">文章：154篇</div>
      <div class="w-40% text-12px mt-10px">评论：154条</div>
      <div class="w-60% text-12px mt-10px">最后更新：2023-7-10</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppsSharp } from '@vicons/ionicons5'
</script>

<style scoped></style>
