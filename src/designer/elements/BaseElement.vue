<template>
  <div class="element" :class="{ 'element-select': selectIndex === index }" @click.stop="widgetList.selectWidget(index)">
    <component :is="Elements[element.type]" v-model="models[element.key]" :placeholder="element.description"></component>
    <div class="draggable-item-move">
      <div class="element-action-item">
        <t-icon name="drag-move" />
      </div>
    </div>
    <div class="element-action">
      <div class="element-action-item" @click="widgetList.deleteWidget(element)">
        <t-icon name="delete" />
      </div>
    </div>
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
  @apply p-2 mb-2 transition-all border-2 border-transparent relative;
}
.element-select {
  @apply bg-slate-200 rounded-sm;
  .draggable-item-move,
  .element-action {
    @apply block;
  }
}
.draggable-item-move {
  @apply absolute left-0 bottom-0 cursor-move hidden z-50;
}
.element-action {
  @apply absolute right-0 bottom-0 hidden cursor-pointer  z-50;
}
.element-action-item {
  @apply flex items-center justify-center bg-gray-400 px-1 text-xs text-white h-5;
}
</style>
