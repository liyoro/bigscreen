<template>
  <div class="home" @click="hideSide">
    <transition name="el-fade-in-linear">
      <div @click.stop="" v-show="!isHideSideView" class="aside-left">
        <svgcircle
          rate="0.6"
          :size="svgcircleSize"
          :text="svgcircleText"
          :textSize="svgcircleTextSize"
          stroke-width="6"
          strokeBgColor="rgba(255, 160, 0, 0.5)"
          stroke-color="#FFA000"
        ></svgcircle>
      </div>
    </transition>
    <transition name="el-fade-in">
      <div @click.stop="" v-show="!isHideSideView" class="aside-right">
        AsideRight
      </div>
    </transition>
  </div>
</template>

<style scope lang="scss">
@import './index.scss';
</style>

<script>
import indexjs from './index.js'
export default { ...indexjs }
</script>
