import { IWidget } from '@/common/widget-list'
import { computed, ref } from 'vue'
import _ from 'lodash'

const elementList = ref<IWidget[]>([])
const models = ref({})
const selectIndex = ref(-1)

const getKey = (type: string) => {
  return type + _.uniqueId()
}

const moveAddWidget = (newIndex: number) => {
  const widget = elementList.value[newIndex]
  widget.key = getKey(widget.type)
  selectIndex.value = newIndex
}

class WidgetList {
  addWidget(widget: IWidget) {
    if (widget.type === 'add') {
      moveAddWidget(widget.newIndex)
      return
    }
    elementList.value.push({
      ...widget,
      key: getKey(widget.type),
    })
    selectIndex.value = elementList.value.length - 1
  }

  updateWidget(widget: IWidget) {
    console.log('widget', widget)
    selectIndex.value = widget.newIndex
  }

  selectWidget(index) {
    selectIndex.value = index
  }

  getWidgetList() {
    return elementList.value
  }

  getSeletedWidget = computed(() => {
    return elementList.value[selectIndex.value]
  })

  getWidgetByName(name: string) {
    return elementList.value.find((item) => item.name === name)
  }

  getWidgetByIndex(index: number) {
    return elementList.value[index]
  }

  getWidgetIndexByName(name: string) {
    return elementList.value.findIndex((item) => item.name === name)
  }

  // 删除
  deleteWidget(item: IWidget) {
    const index = elementList.value.findIndex((i) => i.key === item.key)
    elementList.value.splice(index, 1)
  }

  clearWidget() {
    elementList.value = []
  }
}
const widgetList = new WidgetList()
export { widgetList, elementList, models, selectIndex }
