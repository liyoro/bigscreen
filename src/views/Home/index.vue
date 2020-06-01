<template>
  <div class="home" @click="hideSide">
    <transition name="el-fade-in-linear">
      <div @click.stop="" v-show="!isHideSideView" class="aside-left">
        <div class="svgcircle-view">
          <svgcircle
            class="svgcircle"
            rate="0.6"
            :size="svgcircleSize"
            :text="svgcircleText"
            :textSize="svgcircleTextSize"
            stroke-width="6"
            strokeBgColor="rgba(255, 160, 0, 0.5)"
            stroke-color="#FFA000"
          ></svgcircle>
        </div>
        <div class="equalizer-bar-view">
          <equalizer-bar
            :max="11"
            :active="6"
            :equalizerHeight="20"
            activecolor="#fea313"
            class="eb"
          ></equalizer-bar>
        </div>
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
