<template>
  <div>
    <pre>
      {{ widgetList.getSeletedWidget }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { widgetList } from './hooks/WidgetList'
</script>

<style scoped></style>
