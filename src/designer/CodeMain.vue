<template>
  <div class="code-main">
    <draggable
      v-model="elementList"
      class="deaggable"
      group="AlgerDraggable"
      item-key="key"
      :animation="200"
      handle=".draggable-item-move"
      easing="cubic-bezier(1, 0, 0, 1)"
      @add="widgetList.addWidget"
      @update="widgetList.updateWidget"
    >
      <template #item="{ element, index }">
        <BaseElement :element :index />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import draggable from 'vuedraggable'
import { widgetList, elementList } from './hooks/WidgetList'
import BaseElement from './elements/BaseElement.vue'
const data = reactive({
  drag: false,
  myArray: [],
})
const { drag, myArray } = toRefs(data)
</script>

<style scoped lang="scss">
.code-main {
  @apply p-2 box-border min-h-full w-full h-full;
}
.deaggable {
  @apply min-h-full w-full bg-gray-100 p-3;
}
</style>
