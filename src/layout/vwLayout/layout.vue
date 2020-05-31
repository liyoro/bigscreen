<template>
  <div>
    <div class="app-wrapper">
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
    AppHead
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/scale.scss';
.app-wrapper {
  width: 100vw;
  height: 100vh;
  min-height: 768px;
  transform-origin: center top 0px;
  position: relative;
  left: 50%;
  margin-left: -50vw;
}
</style>
