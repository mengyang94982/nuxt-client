<template>
  <div v-if="showTooltip">
    <n-tooltip
      :placement="placement"
      trigger="hover"
    >
      <template #trigger>
        <div>
          <slot></slot>
        </div>
      </template>
      {{ tooltipContent }}
    </n-tooltip>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  tooltipContent: {
    type: String,
    default: ''
  },
  placement: {
    type: String,
    default: 'bottom'
  }
})

const showTooltip = computed(() => Boolean(props.tooltipContent))
</script>

<style scoped></style>
