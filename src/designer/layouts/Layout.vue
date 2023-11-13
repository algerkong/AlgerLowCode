<template>
  <t-layout>
    <t-header>
      <LayoutHeader ref="layoutHeaderRef"></LayoutHeader>
    </t-header>
    <t-layout>
      <t-aside class="scrollbar">
        <slot name="leftSider" />
      </t-aside>
      <t-content class="scrollbar">
        <slot />
      </t-content>
      <t-aside class="scrollbar">
        <slot name="rightSider" />
      </t-aside>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { debounce } from 'lodash'
import LayoutHeader from './components/LayoutHeader.vue'
// 获取 #alger-lowcode 的外围高度 用于计算 t-layout--with-sider 的高度 使其滚动 如果外层是body 则不需要
const layoutHeight = ref(0)
const layout = ref<HTMLElement | null>(null)
const layoutHeaderRef = ref(null)
const layoutWithSiderHeight = computed(() => {
  return layoutHeight.value + 'px'
})

const loadLayoutHeight = () => {
  layout.value = document.querySelector('#alger-lowcode')
  if (layout.value) {
    const layoutHeaderHeight = layoutHeaderRef.value.$el ? layoutHeaderRef.value.$el.offsetHeight : 0
    if (layout.value.parentElement!.tagName === 'BODY') {
      layoutHeight.value = window.innerHeight - layoutHeaderHeight
    } else {
      layoutHeight.value = layout.value.parentElement!.offsetHeight - layoutHeaderHeight
    }
  }
}

onMounted(() => {
  loadLayoutHeight()
  window.addEventListener(
    'resize',
    debounce(() => {
      loadLayoutHeight()
    }, 200)
  )
})
</script>

<style lang="scss" scoped>
.t-layout--with-sider {
  height: v-bind(layoutWithSiderHeight);
}

.t-layout__sider {
  width: 320px;
  min-width: 320px;
  overflow-y: auto;
}

.t-layout__content {
  overflow-y: auto;
  min-width: 600px;
}

.scrollbar {
  background-color: #fff;
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 2px solid transparent;
    background-clip: content-box;
    background-color: var(--td-scrollbar-color);
  }
}
</style>
