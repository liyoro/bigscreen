<template>
  <div class="home" @click="hideSide">
    <transition name="el-fade-in-linear">
      <div @click.stop="" v-show="!isHideSideView" class="aside-left">
        <div class="item-1">
          <div class="item-title">
            <div
              class="seg-view"
              :class="[isSegSelect ? 'seg-day-select' : 'seg-month-select']"
            >
              <div
                @click="switcher"
                :class="[isSegSelect ? 'seg-day' : 'seg-day2']"
              >
                日
              </div>
              <div
                @click="switcher"
                :class="[isSegSelect ? 'seg-month2' : 'seg-month']"
              >
                月
              </div>
            </div>
          </div>
          <div class="charts-1" ref="chart1">
            <ec-pieChart
              :piechartMsg="piechartMsg1"
              class="ec-style"
              style="width: 100%;height: 100px;"
            ></ec-pieChart>
          </div>
          <div class="charts-2" ref="chart2"></div>
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
