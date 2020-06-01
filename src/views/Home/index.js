/*
 * @Author: liyoro
 * @since: 2020-05-11 18:01:00
 * @lastTime: 2020-05-22 18:08:28
 */
// import echarts from 'echarts/lib/echarts'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/title'

// import { pieOption } from '@/data/pieOption'

import svgcircle from '@/components/svgcircle'
import equalizerbar from '@/components/equalizerbar'

export default {
    name: 'Home',
    components: {
        'svgcircle': svgcircle,
        'equalizer-bar': equalizerbar,
    },
    data() {
        return {
            isHideSideView: false,
            pieChart1: '',
            pieChart2: '',
            // 日月选中
            isSegSelect: true,
            pieOption1: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c}',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: '12'
                    },
                    position: ['50%', '50%']
                },
                // legend: {
                //     show: true,
                //     orient: 'horizontal',
                //     data: ['环境告警', '穿戴告警', '设备告警']
                // },
                series: [
                    {
                        name: '告警分类',
                        type: 'pie',
                        radius: ['45%', '80%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: true,
                        animation: true,
                        top: 0,
                        label: {
                            show: false,
                            position: 'inside',
                            formatter: '{b}:{c}'
                        },
                        data: [
                            { value: 335, name: '环境告警' },
                            { value: 310, name: '穿戴告警' },
                            { value: 234, name: '设备告警' }
                        ]
                    }
                ],
                color: ['#343C6A', '#4F5B93', '#1F213C']
            },
            pieOption2: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c}',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: '12'
                    },
                    position: ['50%', '50%']
                },
                // legend: {
                //     show: true,
                //     orient: 'horizontal',
                //     data: ['严重告警', '一般告警']
                // },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['45%', '80%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: true,
                        animation: true,
                        top: 0,
                        label: {
                            show: false,
                            position: 'inside',
                            formatter: '{b}:{c}'
                        },
                        data: [
                            { value: 335, name: '严重告警' },
                            { value: 310, name: '一般告警' }
                        ]
                    }
                ],
                color: ['#34386E', '#4F5698']
            },
            // svgcircle相关配置
            svgcircleText: '120',
            // 半径
            svgcircleSize: '98',//38
            // 文字大小
            svgcircleTextSize: '20',
        }
    },
    mounted() {
        // this.draw()
        this.resizeCircle()
        this.init()
    },
    beforeDestroy() {
        this.destroyed()
    },
    methods: {
        hideSide() {
            this.isHideSideView = !this.isHideSideView
        },
        draw() {
            // this.pieChart1 = echarts.init(this.$refs.chart1)
            // this.pieChart1.setOption(this.pieOption1)

            // this.pieChart2 = echarts.init(this.$refs.chart2)
            // this.pieChart2.setOption(this.pieOption2)

        },
        // 动态调整圆环里的文字，根据自己需求定义
        resizeCircle() {
            window.screenWidth = document.body.clientWidth
            let screenWidth = window.screenWidth
            let tempSize = Math.round((this.svgcircleSize / 1366) * screenWidth)
            console.log('svgcircleSize:', screenWidth, tempSize)
            this.svgcircleSize = tempSize
            this.svgcircleTextSize = tempSize * 0.6
        },
        init() {
            let vm = this
            setTimeout(() => {
                window.addEventListener('resize', () => {
                    vm.resizeCircle()
                })
            }, 50)
        },
        destroyed() {
            window.removeEventListener('resize', this.init, 20)
        },
    }
}