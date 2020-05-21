/*
 * @Author: liyoro
 * @since: 2020-05-11 18:01:00
 * @lastTime: 2020-05-11 18:01:00
 */
import echarts from 'echarts/lib/echarts'

// import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
// 再引入你需要使用的图表类型，标题，提示信息等
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

import { pieOption } from '@/data/pieOption'

export default {
    name: 'Home',
    data() {
        return {
            isHideSideView: false,
            pieChart: '',
        }
    },
    mounted() {
        this.draw()
        let vm = this
        window.onresize = function () {
            vm.pracChart.resize()
        }
    },
    methods: {

        draw() {
            // 实例化echarts对象
            this.pieChart = echarts.init(this.$refs.chart1)
            //下面是具体的配置
            this.pieChart.setOption(pieOption)
        },
    }
}