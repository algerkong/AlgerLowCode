<template>
  <t-header>
    <t-head-menu>
      <template #logo>
        <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
      </template>
      <template #operations>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a>
        <t-popconfirm content="确定清空所有组件吗？" @confirm="widgetList.clearWidget">
          <t-button shape="circle" variant="text"><t-icon class="t-menu__operations-icon" name="delete" /></t-button>
        </t-popconfirm>
        <t-button shape="circle" variant="text"><t-icon class="t-menu__operations-icon" name="delete" @click="dialogVisible = true" /></t-button>
      </template>
    </t-head-menu>
  </t-header>

  <t-dialog v-model:visible="dialogVisible" title="标题" width="80%" destroy-on-close placement="center">
    <t-layout style="height: 70vh">
      <monaco-editor :model-value="code" language="json" />
    </t-layout>
  </t-dialog>
</template>

<script setup lang="ts">
import { widgetList, elementList } from '@/designer/hooks/WidgetList'
import { ref, watchEffect } from 'vue'
import MonacoEditor from '@/components/monacoEditor.vue'

const dialogVisible = ref(false)
const code = ref('')

watchEffect(() => {
  code.value = JSON.stringify(elementList.value, null, '\t')
})
</script>

<style scoped lang="scss">
.t-dialog__body {
  padding: 0;
}

:global(.t-dialog--default) {
  padding: 0 !important;
}
</style>
