import { IWidget } from '@/common/widget-list'
import { ref } from 'vue'
import _ from 'loadsh'

const elementList = ref<IWidget[]>([])
const models = ref({})

const getKey = (type: string) => {
  return type + _.uniqueId()
}

const moveAddWidget = (newIndex: number) => {
  const widget = elementList.value[newIndex]
  widget.key = getKey(widget.type)
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
  }

  getWidgetList() {
    return elementList.value
  }

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
export { widgetList, elementList, models }
