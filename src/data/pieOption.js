export const pieOption = {
    // title: {
    //     text: '告警分类',
    //     left: 'center',
    //     top: 0,
    //     padding: [0, 0, 58, 0],
    //     textStyle: {
    //         color: '#FFFFFF',
    //         fontSize: '12'
    //     }
    // },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}',
        textStyle: {
            color: '#FFFFFF',
            fontSize: '12'
        },
        position: ['50%', '50%']
    },
    legend: {
        show: false,
        orient: 'horizontal',
        data: ['环境告警', '穿戴告警', '设备告警']
    },
    series: [
        {
            name: '告警分类',
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: true,
            animation: true,
            top: 0,
            label: {
                show: false,
                position: 'inside',
                formatter: '{b}:{c}'
            },
            // emphasis: {
            //     label: {
            //         show: true,
            //         fontSize: '30',
            //         fontWeight: 'bold'
            //     }
            // },
            labelLine: {
                show: false,
                length: 5,
                length2: 5,
                smooth: true
            },
            data: [
                { value: 335, name: '环境告警' },
                { value: 310, name: '穿戴告警' },
                { value: 234, name: '设备告警' }
            ]
        }
    ],
    color: ['#343C6A', '#4F5B93', '#1F213C']
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