<template>
  <draggable
    v-model="myArray"
    class="min-h-full"
    group="icdDesigner"
    item-key="id"
    :transition-duration="2000"
    @start="drag = true"
    @end="drag = false"
  >
    <template #item="{ element }">
      <div class="p-4 mb-2 transition-all border border-gray-200">
        <component :is="Elements[element.type]" v-model="models[element.type]" :placeholder="element.description"></component>
        <t-button theme="warning" @click="deleteItem(element)">删除</t-button>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import draggable from 'vuedraggable'
import Elements from '../../elements'
import { ref } from 'vue'
const models = ref({})
const data = reactive({
  drag: false,
  myArray: [
    { id: 1, name: 'sfasdf as' },
    { id: 2, name: 'kevfdsafsadin' },
    { id: 3, name: 'lifdsafli' },
  ],
})
const { drag, myArray } = toRefs(data)

const deleteItem = (item) => {
  myArray.value.splice(myArray.value.indexOf(item), 1)
}
</script>

<style scoped></style>
