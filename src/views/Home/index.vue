<template>
  <div class="home" @click="hideSide">
    <transition name="el-fade-in-linear">
      <div @click.stop="" v-show="!isHideSideView" class="aside-left">
        <!--  -->
        <div class="item-1">
          <div class="item-title" style="min-height:30px">
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
          <div class="item-title">
            <div class="item-title-left">告警分类</div>
            <div class="item-title-right">告警统计</div>
          </div>
          <div class="charts-view">
            <div class="charts-1" ref="chart1"></div>
            <div class="charts-2" ref="chart2"></div>
          </div>
        </div>
        <!--  -->
        <div class="item-2">
          <div class="item-title">
            <div class="item-title-left item-title-bold new-item-title">
              <i class="xinghuo_iconfont xinghuoiconwurenji item-icon1"></i>
              5G无人机
            </div>
            <div class="item-title-right item-title-bold new-item-title">
              <i class="xinghuo_iconfont xinghuoiconwurenji item-icon2"></i>
              无人机任务
            </div>
          </div>
          <div class="item-2-video">
            <el-image
              class="item-video-img"
              src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
            ></el-image>
            <div class="video-max-btn"></div>
          </div>
          <div class="item-2-time-view"></div>
        </div>
        <!--  -->
        <div class="item-3">
          <div class="item-title">
            <div class="item-title-center">
              5G无人机统计
            </div>
          </div>
          <div class="item-3-left">
            <div class="item-3-left-1">
              <span class="sub-item-span">总飞行任务数</span>
              <span class="sub-item-num1">123</span>
              <span class="sub-item-times">次</span>
            </div>
            <div class="item-3-left-2">
              <span class="sub-item-span">视频存储量</span>
              <span class="sub-item-num1 sub-item-num2-color">286</span>
              <span class="sub-item-times sub-item-num2-po">G</span>
            </div>
            <div class="item-3-left-3">
              <span class="sub-item-span">飞行里程总数</span>
              <span class="sub-item-num1 sub-item-num3-color">235</span>
              <span class="sub-item-times">里</span>
            </div>
            <div class="item-3-left-4">
              <span class="sub-item-span">飞行总时长</span>
              <span class="sub-item-num1 sub-item-num4-color">682</span>
              <span class="sub-item-times">时</span>
            </div>
          </div>
          <div class="item-3-right"></div>
        </div>
        <!--  -->
        <div class="item-4">
          <div class="item-title">
            <div class="item-title-left item-title-bold new-item-title">
              <i
                class="xinghuo_iconfont xinghuoiconshebeizhuangtai item-icon1"
              ></i>
              设备状态
            </div>
            <div class="item-title-right item-title-bold new-item-title">
              <i
                class="xinghuo_iconfont xinghuoiconshebeijiance item-icon2"
              ></i>
              设备监测
            </div>
          </div>
          <div class="item-4-left"></div>
          <div class="item-4-right"></div>
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
