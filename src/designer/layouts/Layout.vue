<template>
  <t-layout>
    <t-header>
      <LayoutHeader></LayoutHeader>
    </t-header>
    <t-layout>
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
.t-layout--with-sider {
  height: calc(100vh - 56px);
}
.t-layout {
  &__sider {
    width: 260px;
    overflow-y: auto;
  }
  &__content {
    overflow-y: auto;
  }
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
