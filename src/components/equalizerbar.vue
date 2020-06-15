<!--
 * @Author: liyoro
 * @since: 2020-05-23 10:25:12
 * @lastTime: 2020-05-23 14:28:13
 -->
<template>
  <div class="equalizer" ref="liequalizerbar">
    <div class="equalizer-bar">
      <span
        :style="{ backgroundColor: normalcolor, height: calequalizerheight }"
        v-for="index in max"
        :key="index"
      ></span>
    </div>
    <div class="equalizer-bar2">
      <span
        :style="{ backgroundColor: activecolor, height: calequalizerheight }"
        v-for="index2 in active"
        :key="index2"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'equalizer-bar',
  props: {
    // 最大小横杆数量
    max: {
      default: 10
    },
    // 活动数量
    active: {
      default: 5
    },
    //
    normalcolor: {
      default: '#ffffff'
    },
    // 活动小横杆颜色
    activecolor: {
      default: '#00A1F9'
    },
    // 小横杆高度
    equalizerHeight: {
      default: 4
    }
  },
  computed: {
    // calequalizerheight() {
    //   let height = this.$refs.liequalizerbar.offsetHeight
    //   return (height - (this.max - 1) * 5) / this.max + 'px'
    // }
  },
  data() {
    return {
      calequalizerheight: 0
    }
  },
  mounted() {
    let height = this.$refs.liequalizerbar.offsetHeight
    // console.log(222, height)
    this.calequalizerheight = (height - (this.max - 1) * 5) / this.max + 'px'
  },
  methods: {},
  watch: {}
}
</script>

<style lang="scss">
.equalizer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
}

.equalizer-bar {
  width: 100%;
  margin: 0 3px;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  left: 0;
  bottom: 0;
}
.equalizer-bar span {
  display: block;
  height: vh(4);
  border-radius: 0px;
  width: 100%;
  margin: 1px 0;
  background-color: #ffffff;
  transition: 0.2s ease all;
  opacity: 1;
}
// .equalizer-bar:nth-child(1) span {
//   background: #231f2f;
// }

.equalizer-bar2 {
  width: 100%;
  margin: 0 3px;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  left: 0;
  bottom: 0;
}
.equalizer-bar2 span {
  display: block;
  height: 4px;
  border-radius: 0px;
  width: 100%;
  margin: 1px 0;
  // background-color: #fea313;
  transition: 0.2s ease all;
  opacity: 1;
}
</style>
