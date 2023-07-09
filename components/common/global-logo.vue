<template>
  <n-image
    :width="width"
    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
  />
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: '40'
  }
})
</script>
