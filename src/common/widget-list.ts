interface WidgetOption {
  placeholder?: string
  clearable?: boolean
  showWordLimit?: boolean
  maxlength?: number
  showPassword?: boolean
  readonly?: boolean
  disabled?: boolean
  prefix?: string
  suffix?: string
  prefixIcon?: string
  suffixIcon?: string
  size?: string
  minlength?: number
  min?: number
  max?: number
  rows?: number
  autosize?: boolean
  showCount?: boolean
  minRows?: number
  maxRows?: number
  multiple?: boolean
  filterable?: boolean
  remote?: boolean
  remoteMethod?: string
  loading?: boolean
  loadingText?: string
  noMatchText?: string
  noDataText?: string
  reserveKeyword?: boolean
  defaultFirstOption?: boolean
  textColor?: string
  fill?: string
  borderColor?: string
  value?: string
  start?: string
  end?: string
  shortcuts?: any[]
  disabledDate?: any
  showWeekNumber?: boolean
  firstDayOfWeek?: number
  showTime?: boolean
  format?: string
  valueFormat?: string
  rangeSeparator?: string
  defaultTime?: string
  isRange?: boolean
  arrowControl?: boolean
  allowHalf?: boolean
  lowThreshold?: number
  highThreshold?: number
  colors?: string[]
  voidColor?: string
  disabledVoidColor?: string
  iconClasses?: string[]
  voidIconClass?: string
  disabledVoidIconClass?: string
  showText?: boolean
  showScore?: boolean
  texts?: string[]
  width?: number
  activeIconClass?: string
  inactiveIconClass?: string
  activeText?: string
  inactiveText?: string
  activeColor?: string
  inactiveColor?: string
  name?: string
  step?: number
  showInput?: boolean
  showInputControls?: boolean
  inputSize?: string
  showStops?: boolean
  showTooltip?: boolean
  range?: boolean
  vertical?: boolean
  height?: string
  label?: string
  debounce?: number
  showAlpha?: boolean
  colorFormat?: string
  predefine?: string[]
  popperClass?: string
  [name: string]: any
}

interface Widget {
  name: string
  type: string
  icon: string
  description: string
  defaultValue: any
  options: WidgetOption
}

export const WIDGET_LIST: Widget[] = [
  {
    name: '单行文本',
    type: 'input',
    icon: 'icon-input',
    description: '请输入',
    defaultValue: '',
    options: {
      placeholder: '请输入',
      clearable: true,
      showWordLimit: true,
      maxlength: 20,
      showPassword: true,
      readonly: false,
      disabled: false,
      prefix: '',
      suffix: '',
      prefixIcon: '',
      suffixIcon: '',
      size: 'small',
      minlength: 2,
      min: 0,
      max: 100,
    },
  },
  {
    name: '多行文本',
    type: 'textarea',
    icon: 'icon-textarea',
    description: '请输入',
    defaultValue: '',
    options: {
      placeholder: '请输入',
      clearable: true,
      showWordLimit: true,
      maxlength: 200,
      readonly: false,
      disabled: false,
      rows: 4,
      autosize: false,
      showCount: true,
      minRows: 2,
      maxRows: 6,
    },
  },
  {
    name: '下拉选择',
    type: 'select',
    icon: 'icon-select',
    description: '请选择',
    defaultValue: '',
    options: {
      placeholder: '请选择',
      clearable: true,
      multiple: false,
      disabled: false,
      filterable: false,
      remote: false,
      remoteMethod: '',
      loading: false,
      loadingText: '加载中',
      noMatchText: '无匹配数据',
      noDataText: '无数据',
      popperClass: '',
      reserveKeyword: false,
      defaultFirstOption: false,
      size: 'small',
      options: [
        {
          value: 'option1',
          label: '选项1',
        },
        {
          value: 'option2',
          label: '选项2',
        },
        {
          value: 'option3',
          label: '选项3',
        },
      ],
    },
  },
  {
    name: '单选框组',
    type: 'radio',
    icon: 'icon-radio',
    description: '请选择',
    defaultValue: '',
    options: {
      disabled: false,
      size: 'small',
      textColor: '',
      fill: '#409EFF',
      borderColor: '',
      options: [
        {
          value: 'option1',
          label: '选项1',
        },
        {
          value: 'option2',
          label: '选项2',
        },
        {
          value: 'option3',
          label: '选项3',
        },
      ],
    },
  },
  {
    name: '多选框组',
    type: 'checkbox',
    icon: 'icon-checkbox',
    description: '请选择',
    defaultValue: [],
    options: {
      disabled: false,
      size: 'small',
      textColor: '',
      fill: '#409EFF',
      borderColor: '',
      options: [
        {
          value: 'option1',
          label: '选项1',
        },
        {
          value: 'option2',
          label: '选项2',
        },
        {
          value: 'option3',
          label: '选项3',
        },
      ],
    },
  },
  {
    name: '日期选择器',
    type: 'datePicker',
    icon: 'icon-date-picker',
    description: '请选择',
    defaultValue: '',
    options: {
      type: 'date',
      placeholder: '请选择',
      clearable: true,
      readonly: false,
      disabled: false,
      editable: true,
      align: 'left',
      popperClass: '',
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd',
      rangeSeparator: '-',
      defaultTime: '',
      defaultValue: '',
      timePickerOptions: {
        start: '09:00',
        step: '00:30',
        end: '18:00',
      },
      shortcuts: [],
      disabledDate: '',
      multiple: false,
      showWeekNumber: false,
      firstDayOfWeek: 1,
      showTime: false,
      pickerOptions: {
        disabledDate: '',
        shortcuts: [],
        firstDayOfWeek: 1,
        showWeekNumber: false,
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd',
      },
    },
  },
  {
    name: '时间选择器',
    type: 'timePicker',
    icon: 'icon-time-picker',
    description: '请选择',
    defaultValue: '',
    options: {
      placeholder: '请选择',
      clearable: true,
      readonly: false,
      disabled: false,
      editable: true,
      align: 'left',
      popperClass: '',
      format: 'HH:mm:ss',
      valueFormat: 'HH:mm:ss',
      isRange: false,
      arrowControl: true,
      pickerOptions: {
        start: '09:00',
        step: '00:30',
        end: '18:00',
      },
    },
  },
  {
    name: '评分',
    type: 'rate',
    icon: 'icon-rate',
    description: '请评分',
    defaultValue: 0,
    options: {
      max: 5,
      disabled: false,
      allowHalf: false,
      lowThreshold: 2,
      highThreshold: 4,
      colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
      voidColor: '#C6D1DE',
      disabledVoidColor: '#EFF2F7',
      iconClasses: ['icon-star-on', 'icon-star-on', 'icon-star-on'],
      voidIconClass: 'icon-star-off',
      disabledVoidIconClass: 'icon-star-on',
      showText: false,
      showScore: false,
      textColor: '#1F2D3D',
      texts: ['极差', '失望', '一般', '满意', '惊喜'],
    },
  },
  {
    name: '开关',
    type: 'switch',
    icon: 'icon-switch',
    description: '请选择',
    defaultValue: false,
    options: {
      disabled: false,
      width: 40,
      activeIconClass: 'icon-check',
      inactiveIconClass: 'icon-close',
      activeText: '',
      inactiveText: '',
      activeColor: '#13ce66',
      inactiveColor: '#ff4949',
      name: '',
    },
  },
  {
    name: '滑块',
    type: 'slider',
    icon: 'icon-slider',
    description: '请选择',
    defaultValue: 0,
    options: {
      disabled: false,
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      showInputControls: true,
      inputSize: 'small',
      showStops: false,
      showTooltip: true,
      formatTooltip: '',
      range: false,
      vertical: false,
      height: '',
      label: '',
      debounce: 300,
    },
  },
  {
    name: '颜色选择器',
    type: 'colorPicker',
    icon: 'icon-color-picker',
    description: '请选择',
    defaultValue: '',
    options: {
      disabled: false,
      size: 'small',
      showAlpha: false,
      colorFormat: '',
      predefine: [],
      popperClass: '',
    },
  },
]
