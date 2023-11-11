<template>
  <draggable
    v-model="WIDGET_LIST"
    :group="{ name: 'AlgerDraggable', pull: 'clone', put: false }"
    item-key="id"
    :sort="false"
    :transition-duration="2000"
    class="widget-list"
    @start="drag = true"
    @end="drag = false"
  >
    <template #item="{ element }">
      <div class="widget-list-item" @click="handleAddWidget(element)">
        <div class="widget-list-item-box">{{ element.name }}</div>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { IWidget, WIDGET_LIST } from '@/common/widget-list'
import { widgetList } from './hooks/WidgetList'
import { ref } from 'vue'
const drag = ref(false)

const handleAddWidget = (element: IWidget) => {
  widgetList.addWidget(element)
}
</script>

<style scoped lang="scss">
.widget-list {
  @apply flex flex-wrap m-2;
  &-item {
    @apply w-[50%]  transition-all flex items-center justify-center;
    &-box {
      @apply w-full p-2 mx-2 my-1 box-border border border-gray-200 text-ellipsis overflow-hidden whitespace-nowrap text-xs cursor-move rounded-sm;
    }
  }
}
</style>
