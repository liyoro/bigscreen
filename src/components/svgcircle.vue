<!--
 * @Author: liyoro
 * @since: 2020-05-23 10:25:12
 * @lastTime: 2020-05-25 15:48:48
 -->
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-content"
    :viewbox="viewbox"
    :width="diameterShow"
    :height="diameterShow"
  >
    <!-- 外部圆圈，固定360度圆圈 -->
    <circle
      :cx="size"
      :cy="size"
      :r="raduisActual"
      :stroke-width="strokeWidthIn"
      :stroke="strokeBgColor"
      fill="none"
    ></circle>
    <!-- 百分比环 -->
    <circle
      v-if="rate"
      :text="text"
      :cx="size"
      :cy="size"
      :r="raduisActual"
      :stroke-width="strokeWidth"
      :stroke="strokeColor"
      fill="none"
      :transform="transform"
      :stroke-dasharray="strokeDasharray"
      stroke-linecap="round"
    ></circle>
    <!-- 中间背景 -->
    <circle :cx="size" :cy="size" :r="raduisActualIn" fill="#3b3743"></circle>
    <!-- 中间文字，根据自己的需求定义了 -->
    <text :x="size" :y="size" fill="#ffffff" :font-size="numTextSize">
      {{ text }}
    </text>
    <!-- 如果中间文字带单位的，根据自己的需求处理了 -->
    <text :x="size" :y="timesY" fill="#ffffff" :font-size="numTypeTextSize">
      次
    </text>
  </svg>
</template>
<script>
export default {
  props: {
    // 圆环外圈的半径，为了好看，最小值半径19
    size: {
      default: 38
    },
    // 圆环的小宽度
    strokeWidth: {
      default: 5
    },
    // 圆环的颜色
    strokeColor: {
      default: '#00A1F9'
    },
    strokeBgColor: {
      default: 'rgba(0,161,249,0.6)'
    },
    // 圆环显示的百分比 这边是小数
    rate: {
      default: 0.5
    },
    // 圆环里面的文字 这里的文字如果跟rate息息相关 可以放到computed计算
    text: {
      default: 50
    },
    // 圆环里面的文字的fontSize大小
    textSize: {
      default: 20
    }
  },
  computed: {
    timesY() {
      return this.size * 1.5
    },
    strokeWidthIn() {
      return Math.round(0.6 * this.strokeWidth)
    },
    // 圆半径
    raduisActual() {
      return this.size - this.strokeWidth
    },
    // 内部放文字圆圈半径
    raduisActualIn() {
      return Math.round((this.size - this.strokeWidth) * 0.8)
    },
    // svg的宽高，也就是圆环直径
    diameterShow() {
      return 2 * this.size
    },
    viewbox() {
      return `0 0 ${this.diameterShow} ${this.diameterShow}`
    },
    strokeDasharray() {
      const perimeter = Math.PI * 2 * this.raduisActual
      const showLength = Math.round(this.rate * perimeter - 3)
      return `${showLength} 1000`
    },
    transform() {
      return `matrix(0,-1,1,0,0,${this.diameterShow})`
    },
    numTextSize() {
      return this.textSize
    },
    numTypeTextSize() {
      return this.textSize > 24 ? this.textSize / 2 : 12
    }
    // textStyle() {
    //   let res = {}
    //   res.fontSize = `${this.textSize}px`
    //   res.width = '50%'
    //   res.height = '50%'
    //   return res
    // },
    // timesStyle() {
    //   let res = {}
    //   res.fontSize = `${this.textSize}px`
    //   res.width = '50%'
    //   res.height = '50%'
    //   return res
    // }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>
<style scoped lang="scss">
$ui-width: 1224; //设计图的基准宽
$ui-height: 696; //设计图的基准高

@function vw($px) {
  @return $px / $ui-width * 100vw;
}

@function vh($px) {
  @return $px / $ui-height * 100vh;
}
text {
  text-anchor: middle;
}
.parent-element-center {
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  vertical-align: middle;
  overflow: hidden;
}
.svg-content {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}
.element-center {
  position: absolute;
  left: 50%;
  top: 45%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  font-size: vw(20);
  background-color: #3b3743;
  color: #ffffff;
}
</style>
