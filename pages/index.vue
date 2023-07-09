<template>
  <div class="bg-#fff rd-4px p-16px flex-1">
    <div class="text-16px pb-16px border-b-1 border-#e9eaed">全部文章</div>
    <article-item
      v-for="(item, index) in 10"
      :key="index"
      :item="item"
    />
    <div>
      <n-pagination
        :item-count="101"
        :page="2"
        :page-size="15"
        @update:page="pageChange"
      >
        <template #prefix="{ itemCount, startIndex }">从第 {{ startIndex }} 项开始, 共 {{ itemCount }} 项</template>
        <template #suffix="{ endIndex }">从第 {{ endIndex }} 项结束</template>
      </n-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)
function pageChange(num: number) {
  currentPage.value = num
}
</script>
