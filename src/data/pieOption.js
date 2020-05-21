export const pieOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ]
        }
    ]
}

// {
//     legend: {
//         orient: 'horizontal',
//         width: 180,
//         x: 'center',
//         y: '72%',
//         itemWidth: 10,
//         itemHeight: 10,
//         itemGap: 10,
//         data: ['Speaking', 'Listening', 'Writing', 'Reading']
//     },
//     series: [
//         {
//             name: '访问来源',
//             type: 'pie',
//             radius: '55%',
//             center: ['50%', '40%'],
//             data: [],
//             itemStyle: {
//                 emphasis: {
//                     shadowBlur: 10,
//                     shadowOffsetX: 0,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
//                 },
//                 // 饼状图显示数据
//                 normal: {
//                     label: {
//                         show: true,
//                         position: 'inner',  //让饼状图百分比在区域内显示
//                         formatter: '{d}%'
//                     },
//                     labelLine: {
//                         show: false
//                     }
//                 }
//             }
//         }
//     ],
//     color: ['#B691F1', '#3FA2FD', '#FCAAC0', '#3AF2E8']
// }