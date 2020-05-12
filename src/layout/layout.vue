<template>
  <div>
    <div
      class="app-wrapper"
      :style="{
        transformOrigin: 'center top',
        transform: `scale(${scalseNum},${scalseNum})`,
        '-webkit-transform': `scale(${scalseNum},${scalseNum})`,
        '-moz-transform': `scale(${scalseNum},${scalseNum})`,
        '-o-transform': `scale(${scalseNum},${scalseNum})`,
        '-ms-transform': `scale(${scalseNum},${scalseNum})`,
      }"
    >
      <!-- 头部栏 -->
      <app-head></app-head>
      <!-- 内容栏 -->
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, AppHead } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    AppHead,
  },
  data() {
    return {
      scalseNum: 1, //缩放比例
    }
  },
  computed: {},
  mounted() {
    //计算缩放比例
    this.resize_window()
    window.addEventListener('resize', () => {
      this.resize_window()
    })
  },
  methods: {
    //计算缩放比例
    resize_window() {
      let w_height = Number(document.documentElement.clientWidth / 1366)
      // let w_height = Number(window.innerWidth / 1366)
      this.scalseNum = w_height
    },
  },
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 1366px;
  height: 768px;
  transform-origin: center top 0px;
  position: relative;
  left: 50%;
  margin-left: -683px;
}
</style>
