<template>
  <t-layout>
    <t-header>
      <LayoutHeader ref="layoutHeaderRef"></LayoutHeader>
    </t-header>
    <t-layout class="layout-main">
      <t-aside class="scrollbar">
        <slot name="leftSider" />
      </t-aside>
      <t-content class="scrollbar">
        <slot />
      </t-content>
      <t-aside class="scrollbar">
        <slot name="rightSider" />
      </t-aside>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<style lang="scss" scoped>
.layout-main {
  height: calc(100vh - 56px);
}

.t-layout__sider {
  width: 320px;
  min-width: 320px;
  overflow-y: auto;
}

.t-layout__content {
  overflow-y: auto;
  min-width: 600px;
}

.scrollbar {
  background-color: #fff;
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 2px solid transparent;
    background-clip: content-box;
    background-color: var(--td-scrollbar-color);
  }
}
</style>
