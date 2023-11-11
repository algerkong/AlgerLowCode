<template>
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
        <!-- <t-button shape="circle" variant="text" @click="widgetList.clearWidget"><t-icon class="t-menu__operations-icon" name="delete" /></t-button> -->
        <!-- 修改为 弹框确定 -->
        <t-popconfirm content="确定清空所有组件吗？" @confirm="widgetList.clearWidget">
          <t-button shape="circle" variant="text"><t-icon class="t-menu__operations-icon" name="delete" /></t-button>
        </t-popconfirm>
      </template>
    </t-head-menu>
  </t-header>
</template>

<script setup lang="ts">
import { widgetList } from '@/designer/hooks/WidgetList'
</script>

<style scoped></style>
