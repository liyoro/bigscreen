<template>
  <div class="home" @click="isHideSideView = !isHideSideView">
    <transition name="el-fade-in-linear">
      <div v-show="!isHideSideView" class="aside-left">AsideLeft</div>
    </transition>
    <transition name="el-fade-in">
      <div v-show="!isHideSideView" class="aside-right">AsideRight</div>
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
