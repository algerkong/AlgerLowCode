<template>
  <Designer></Designer>
</template>

<script lang="ts" setup>
// import { reactive, toRefs } from 'vue'
// import draggable from 'vuedraggable'
import Designer from './designer/Designer.vue'

// const data = reactive({
//   drag: false,
//   myArray: [
//     { id: 1, name: 'Jenny1111' },
//     { id: 2, name: 'kevin' },
//     { id: 3, name: 'lili' },
//   ],
// })
// const { drag, myArray } = toRefs(data)
</script>

<style lang="scss" scoped>
body {
  @apply bg-black;
}
.item {
  @apply bg-blue-600 p-2 m-10 rounded-lg shadow-xl shadow-gray-800 cursor-move text-gray-50;
}
</style>
