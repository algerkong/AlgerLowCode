<template>
  <t-header>
    <t-head-menu value="item1" height="120px">
      <template #logo>
        <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
      </template>
      <!-- <t-menu-item value="item1"> 已选内容 </t-menu-item>
      <t-menu-item value="item2"> 菜单内容一 </t-menu-item>
      <t-menu-item value="item3"> 菜单内容二 </t-menu-item>
      <t-menu-item value="item4" :disabled="true"> 菜单内容三 </t-menu-item> -->
      <template #operations>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a>
        <!-- <t-button shape="circle" variant="text" @click="widgetList.clearWidget"><t-icon class="t-menu__operations-icon" name="delete" /></t-button> -->
        <!-- 修改为 弹框确定 -->
        <t-popconfirm content="确定清空所有组件吗？" @confirm="widgetList.clearWidget">
          <t-button shape="circle" variant="text"><t-icon class="t-menu__operations-icon" name="delete" /></t-button>
        </t-popconfirm>
        <t-button shape="circle" variant="text"><t-icon class="t-menu__operations-icon" name="delete" @click="dialogVisible = true" /></t-button>
        <t-dialog v-model:visible="dialogVisible" title="标题" width="1000px">
          <t-layout style="height: 500px; overflow-y: scroll">
            <codemirror v-model="code" placeholder="Code gose here..." class="code-mirror" :autofocus="true" :tab-size="2" :extensions="extensions" />
          </t-layout>
        </t-dialog>
      </template>
    </t-head-menu>
  </t-header>
</template>

<script setup lang="ts">
import { widgetList, elementList } from '@/designer/hooks/WidgetList'
import { ref } from 'vue'
const dialogVisible = ref(false)
import { Codemirror } from 'vue-codemirror'
import { json } from '@codemirror/lang-json'
import { watchEffect } from 'vue'
const code = ref('')

const extensions = [json()]

watchEffect(() => {
  code.value = JSON.stringify(elementList.value, null, '\t')
})
</script>

<style scoped lang="scss">
.t-dialog__body {
  padding: 0;
}

.code-mirror {
  height: 600px;
  text-align: left;
}
</style>
