<template>
  <t-layout>
    <t-header>
      <t-head-menu value="item1" height="120px">
        <template #logo>
          <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
        </template>
        <t-menu-item value="item1"> 已选内容 </t-menu-item>
        <t-menu-item value="item2"> 菜单内容一 </t-menu-item>
        <t-menu-item value="item3"> 菜单内容二 </t-menu-item>
        <t-menu-item value="item4" :disabled="true"> 菜单内容三 </t-menu-item>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout>
      <t-aside class="scrollbar">
        <draggable
          v-model="WIDGET_LIST"
          :group="{ name: 'icdDesigner', pull: 'clone', put: false }"
          item-key="id"
          :sort="false"
          :transition-duration="2000"
          class="widget-list"
          @start="drag = true"
          @end="drag = false"
        >
          <template #item="{ element }">
            <div class="widget-list-item">
              <div class="widget-list-item-box">{{ element.name }}</div>
            </div>
          </template>
        </draggable>
      </t-aside>
      <t-content class="scrollbar">
        <CodeMain />
      </t-content>
      <t-aside class="scrollbar">
        <div v-for="item in 100" :key="item" class="p-4 m-2 bg-gray-200">hello{{ item }}</div>
      </t-aside>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import CodeMain from './components/CodeMain.vue'

import { reactive, toRefs } from 'vue'
import draggable from 'vuedraggable'
import { WIDGET_LIST } from '@/common/widget-list'
import { ref } from 'vue'
const drag = ref(false)
</script>

<style lang="scss" scoped>
.widget-list {
  @apply flex flex-wrap m-2;
  &-item {
    @apply w-[50%]  transition-all flex items-center justify-center;
    &-box {
      @apply w-full p-2 mx-2 my-1 box-border border border-gray-200 text-ellipsis overflow-hidden whitespace-nowrap text-xs cursor-move rounded-sm;
    }
  }
}
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
