<template>
  <div
    class="app-wrapper"
    :style="{ '-webkit-transform': 'scale(' + bill + ')' }"
  >
    <app-head></app-head>
    <div class="main-container">
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
  computed: {
    bill: function() {
      return window.innerWidth / 1366
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 1366px;
  background-color: $appBg;
  // &:after {
  //   content: '';
  //   display: table;
  //   clear: both;
  // }
  // .container {
  //   overflow: hidden;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  // }
}
</style>
