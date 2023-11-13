<template>
  <div class="element" :class="{ 'element-select': selectIndex === index }" @click.stop="widgetList.selectWidget(index)">
    <component :is="Elements[element.type]" v-model="models[element.key]" :placeholder="element.description"></component>
    <t-button theme="warning" @click="widgetList.deleteWidget(element)">删除</t-button>
    <t-icon name="drag-move" class="draggable-item-move text-gray-400" />
  </div>
</template>

<script setup lang="ts">
import { IWidget } from '@/common/widget-list'
import Elements from './index'
import { ref } from 'vue'
import { widgetList, elementList, models, selectIndex } from '@/designer/hooks/WidgetList'
const props = defineProps<{
  element: IWidget
  index: number
}>()
</script>

<style scoped lang="scss">
.element {
  @apply p-2 mb-2 transition-all border-2 border-transparent;
}
.element-select {
  @apply border-blue-500;
}
</style>
