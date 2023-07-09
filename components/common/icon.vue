<template>
  <Icon :icon="icon" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style scoped></style>
