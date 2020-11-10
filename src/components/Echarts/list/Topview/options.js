export const commonOption = {
    titalOrder: {
        xAxis: {
            type: "category",
            show: false,
            boundaryGap: false, //宽度极限拉伸
        },
        yAxis: {
            show: false
        },
        series: [{
            type: 'line',
            data: [
                640, 432, 220, 534, 790,
                430, 220, 320, 532, 320, 834,
                430, 220, 320, 532, 320, 834,
                690, 530, 220, 620
            ],
            areaStyle: {
                color: '#22c3aa'
            },
            lineStyle: { //线条宽度
                width: 0
            },
            itemStyle: { //节点小点点
                opacity: 0
            },
            smooth: true //是否平滑
        }],
        grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
    },
    todayUsers: {
        // color: ['#3398db'],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: "category",
            data: [
                '0:01', '0:01', '40:01', '50:01', '60:01',
                '0:01', '0:01', '30:01', '0:01', '70:01',
                '0:01', '0:01', '20:01', '0:01', '80:01',
                '0:01', '0:01', '10:01', '80:01', '90:01',
            ],
            boundaryGap: false, //宽度极限拉伸
            show: false
        },
        yAxis: {
            show: false
        },
        series: [
            {
                type: 'bar',
                data: [
                    640, 432, 220, 534, 790,
                    430, 220, 320, 532, 320,
                    834, 430, 220, 320, 532,
                    834, 690, 530, 220, 620
                ],
                barWidth: '60%'
            }
        ],
        grid: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }
    },
    totalUsers: {
        xAxis: {
            type: 'value',
            show: false
        },
        yAxis: {
            type: 'category',
            show: false,
        },
        series: [
            {
                type: 'bar',
                data: [100],
                barWidth: 10,
                stack: '总量',
                itemStyle: {
                    color: '#22c3aa'
                }
            },
            {
                type: 'bar',
                data: [250],
                barWodth: 10,
                stack: '总量',
                itemStyle: {
                    color: '#4ea397'
                }
            },
            {
                type: 'custom',
                stack: '总量',
                data: [100],
                renderItem: (params, api) => {
                    const value = api.value(0);
                    const endPoint = api.coord([value, 0])
                    return {
                        type: 'group',
                        children: [
                            
                            {
                                type: 'path',
                                position: endPoint,
                                shape: {
                                    d: 'M209.656 344.031l298.604 335.938 306.084-335.839-604.688-0.099z',
                                    x: 0,
                                    y: -18,
                                    width: 10,
                                    height: 10,
                                    layout: 'cover'
                                },
                                style: {
                                    fill: '#22c3aa'
                                }
                            },
                            {
                                type: 'path',
                                position: endPoint,
                                shape: {
                                    d: 'M512 341.333333l-298.666667 298.666667h597.333334z',
                                    x: 0,
                                    y: 10,
                                    width: 10,
                                    height: 10,
                                    layout: 'cover'
                                },
                                style: {
                                    fill: '#22c3aa'
                                }
                            },
                        ]

                    }
                }
            }
        ],
        grid: {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
        }
    }
}