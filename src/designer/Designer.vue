<template>
  <AlgerLayout>
    <template #leftSider>
      <WidgetAside />
    </template>
    <CodeMain />
    <template #rightSider>
      <ElementSetting />
    </template>
  </AlgerLayout>
</template>

<script setup lang="ts">
import AlgerLayout from './layouts/Layout.vue'
import CodeMain from './CodeMain.vue'
import WidgetAside from './WidgetAside.vue'
import ElementSetting from './ElementSetting.vue'
</script>

<style scoped lang="scss"></style>
