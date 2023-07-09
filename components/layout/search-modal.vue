<template>
  <n-modal
    v-model:show="show"
    :segmented="{ footer: 'soft' }"
    :closable="false"
    preset="card"
    footer-style="padding:0;margin:0;"
    class="fixed left-0 right-0 w-630px top-50px"
    @after-leave="handleClose"
  >
    <n-input-group>
      <n-input
        ref="inputRef"
        v-model:value="keyword"
        clearable
        placeholder="请输入关键字搜索"
        @input="handleSearch"
      >
        <template #prefix>
          <n-icon
            class="mr20px cursor-pointer"
            size="25"
            :component="SearchOutline"
          />
        </template>
      </n-input>
      <n-button
        type="primary"
        ghost
        @click="handleClose"
      >
        取消
      </n-button>
    </n-input-group>
    <div class="mt-20px">
      <n-empty
        v-if="resultOptions.length === 0"
        description="暂无搜索结果"
      />
      <div v-else>这个是结果</div>
    </div>
    <template #footer>
      <div class="px-24px h-44px flex-y-center">
        <span class="mr-14px flex-y-center">
          <common-icon
            icon="ic:sharp-keyboard-return"
            class="icon text-20px p-2px mr-6px"
          />
          <span>确认</span>
        </span>
        <span class="mr-14px flex-y-center">
          <common-icon
            icon="mdi-arrow-up-thin"
            class="icon text-20px p-2px mr-5px"
          />
          <common-icon
            icon="mdi-arrow-down-thin"
            class="icon text-20px p-2px mr-6px"
          />
          <span>切换</span>
        </span>
        <span class="flex-y-center">
          <common-icon
            icon="mdi-keyboard-esc"
            class="icon text-20px p-2px mr-6px"
          />
          <span>关闭</span>
        </span>
      </div>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, shallowRef, ref } from 'vue'
import { SearchOutline } from '@vicons/ionicons5'
import { useDebounceFn } from '@vueuse/core'

const props = defineProps({
  value: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:value'])

const show = computed({
  get() {
    return props.value
  },
  set(val: boolean) {
    emits('update:value', val)
  }
})

const resultOptions = shallowRef([])
const inputRef = ref()

const keyword = ref('')

const handleSearch = useDebounceFn(search, 300)

/** 查询 */
function search() {
  // 查询
}

function handleClose() {
  show.value = false
  /** 延时处理防止用户看到某些操作 */
  setTimeout(() => {
    // resultOptions.value = [];
    // keyword.value = '';
  }, 200)
}
</script>

<style scoped lang="scss">
.icon {
  box-shadow: inset 0 -2px #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px #1e235a66;
}
</style>
