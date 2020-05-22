<template>
  <div id="piechart" ref="piechart"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'

// import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
// 再引入你需要使用的图表类型，标题，提示信息等
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

export default {
  name: 'piechart',
  props: ['piechartMsg'],
  data() {
    return {}
  },
  mounted: function() {
    this.dataInit()
    setTimeout(() => {
      this.initChart()
    }, 1000)
  },
  methods: {
    dataInit() {
      console.log(this.piechartMsg)
    },
    initChart() {
      //   const that = this
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.piechart)
      // 绘制图表
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          //formatter: "{b}: {c}次",
          backgroundColor: 'rgba(108,121,129,0.7)'
        },
        legend: {
          show: this.piechartMsg.fordata[0].legend,
          itemHeight: 10,
          itemWidth: 10,
          padding: 0,
          itemGap: 10,
          right: 20,
          top: 0,
          textStyle: {
            color: '#cdd1d0',
            fontSize: 10
          },
          data: this.piechartMsg.fordata[0].axis
        },
        title: {
          text: this.piechartMsg.fordata[0].axisdatatotle,
          show: true,
          textStyle: {
            color: '#ffffff',
            fontSize: 21,
            fontWeight: 'normal'
          },
          x: 'center',
          y: 'middle'
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '80%'],
            avoidLabelOverlap: false,
            center: ['50%', '50%'],
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: '#fffefb'
                },
                position: 'center',
                formatter: '{c}'
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false,
                lineStyle: {
                  color: '#a0a0a0'
                }
              }
            },
            data: [
              {
                value: this.piechartMsg.fordata[0].axisdata[0],
                name: this.piechartMsg.fordata[0].axis[0],
                itemStyle: {
                  normal: {
                    color: '#343C6A'
                  }
                },
                tooltip: {
                  show: true
                }
              },
              {
                value: this.piechartMsg.fordata[0].axisdata[1],
                name: this.piechartMsg.fordata[0].axis[1],
                itemStyle: {
                  normal: {
                    color: '#4F5B93'
                  }
                }
              },
              {
                value: this.piechartMsg.fordata[0].axisdata[2],
                name: this.piechartMsg.fordata[0].axis[2],
                itemStyle: {
                  normal: {
                    color: '#1F213C'
                  }
                },
                tooltip: {
                  show: true
                }
              }
            ]
          }
        ]
      })
    }
  },
  watch: {}
}
</script>

<style></style>
