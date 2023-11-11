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
    >
      <template #item="{ element }">
        <div class="p-4 mb-2 transition-all border border-gray-200">
          <component :is="Elements[element.type]" v-model="models[element.key]" :placeholder="element.description"></component>
          <t-button theme="warning" @click="widgetList.deleteWidget(element)">删除</t-button>
          <t-icon name="drag-move" class="draggable-item-move text-gray-400" />
        </div>
      </template>
      <!-- <div
        v-for="(element, index) in elementList"
        :key="index"
        class="p-4 mb-2 transition-all border border-gray-200"
        @click.stop="handleSelectElement(index)"
      >
        <component :is="Elements[element.type]" v-model="models[element.key]" :placeholder="element.description"></component>
        <t-button theme="warning" @click="widgetList.deleteWidget(element)">删除</t-button>
        <t-icon name="drag-move" class="draggable-item-move text-gray-400" />
      </div> -->
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import draggable from 'vuedraggable'
import Elements from './elements'
import { ref } from 'vue'
import { widgetList, elementList, models } from './hooks/WidgetList'
const data = reactive({
  drag: false,
  myArray: [],
})
const { drag, myArray } = toRefs(data)

const deleteItem = (item) => {
  myArray.value.splice(myArray.value.indexOf(item), 1)
}

const handleDraggableStart = () => {
  drag.value = true
}

const handleDraggableEnd = () => {
  drag.value = false
}

const handleSelectElement = (index) => {
  // widgetList.selectWidget(index)
}
</script>

<style scoped lang="scss">
.code-main {
  @apply p-2 box-border min-h-full w-full h-full;
}
.deaggable {
  @apply min-h-full w-full bg-gray-100;
}
</style>
