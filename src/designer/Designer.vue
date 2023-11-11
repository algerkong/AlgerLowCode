<template>
  <AlgerLayout>
    <template #leftSider>
      <WidgetAside></WidgetAside>
    </template>
    <CodeMain></CodeMain>
    <template #rightSider>
      <div>
        <div v-for="item in 100" :key="item" class="p-4 m-2 bg-gray-200">hello{{ item }}</div>
      </div>
    </template>
  </AlgerLayout>
</template>

<script setup lang="ts">
import AlgerLayout from './layouts/Layout.vue'
import CodeMain from './CodeMain.vue'
import WidgetAside from './WidgetAside.vue'
</script>

<style scoped lang="scss"></style>
