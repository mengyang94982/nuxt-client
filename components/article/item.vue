<template>
  <div class="p-y-20px flex">
    <div>
      <img
        src=""
        alt="文章封面"
      />
    </div>
    <div>
      <h2>这个是文章的标题</h2>
      <div>这个是文章的内容</div>
    </div>
    <div>
      <div>这是左边的图标 时间 阅读量 评论 点赞</div>
      <div>
        <n-button>阅读详情</n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
</script>

<style scoped></style>
