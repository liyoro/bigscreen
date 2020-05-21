<template>
  <div class="home" @click="isHideSideView = !isHideSideView">
    <transition name="el-fade-in-linear">
      <div @click.stop="" v-show="!isHideSideView" class="aside-left">
        <div class="charts-1" ref="chart1"></div>
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
