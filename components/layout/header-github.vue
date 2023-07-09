<template>
  <common-hover-container
    tooltip-content="搜索"
    @click="onClick"
  >
    <n-icon
      class="mr20px cursor-pointer"
      size="25"
      :component="LogoGithub"
    />
  </common-hover-container>
</template>

<script setup lang="ts">
import { LogoGithub } from '@vicons/ionicons5'

function onClick() {
  window.open('https://github.com/mengyang94982', '_blank')
}
</script>

<style scoped></style>
