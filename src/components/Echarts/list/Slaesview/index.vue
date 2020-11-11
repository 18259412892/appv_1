<template>
<div class="t-echarts-slaes-view">
    <a-card>
        <template v-slot:title>
            <div class="t-echarts-slaes-view-header">
                <a-menu :default-selected-keys="['1']" mode="horizontal">
                    <a-menu-item key="1">销售量</a-menu-item>
                    <a-menu-item key="2">访问量</a-menu-item>
                </a-menu>
                <div class="t-echarts-slaes-view-right-menu">
                    <a-radio-group :value="size" @change="handleSizeChange">
                        <a-radio-button value="large">
                            今日
                        </a-radio-button>
                        <a-radio-button value="default">
                            本周
                        </a-radio-button>
                        <a-radio-button value="small">
                            本月
                        </a-radio-button>
                        <a-radio-button value="small1">
                            今年
                        </a-radio-button>
                    </a-radio-group>
                </div>
            </div>

        </template>
        <div class="t-echarts-slaes-view-echarts">
            <div class="echarts">
                <div id="total-users-chart1" :style="{width:'100%',height:'100%'}" />
            </div>

            <div class="list">
                <div class="title">排行榜</div>
                <div class="item" v-for="(item,index) in listData" :key="index">
                    <div :class="['no',index <= 3 ? 'active':'']">{{item.id}}</div>
                    <div class="name">{{item.name}}</div>
                    <div class="money">{{item.money}}</div>
                </div>
            </div>
        </div>
    </a-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            size: 'large',
            listData: [{
                id: 1,
                name: '品牌',
                money: '323.234'
            }, {
                id: 3,
                name: '品牌1',
                money: '323.234'
            }, {
                id: 4,
                name: '品牌2',
                money: '323.234'
            }, {
                id: 5,
                name: '品牌3',
                money: '323.234'
            }, {
                id: 6,
                name: '品牌4',
                money: '323.234'
            }, {
                id: 7,
                name: '品牌5',
                money: '323.234'
            }]
        }
    },
    mounted() {
        const chartDom2 = document.querySelector('#total-users-chart1');
        const chart = this.$echarts.init(chartDom2, 'wonderland');
        chart.setOption({
            tooltip: {
                trigger: 'axis'
            },
            title: {
                text: '年度销售额',
                textStyle: {
                    fontSize: 12,
                    color: '#666'
                },
                left: 25,
                top: 20
            },

            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                // boundaryGap: false,
                axisTick: {
                    alignWithLabel: true,
                    lineStyle: {
                        color: 'blue'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#4ea397'
                    }
                },
                axisLabel: {
                    color: '#4ea397'
                }
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                        color: '#f60'
                    }
                }
            },
            series: [{
                type: 'bar',
                barWidth: '35%',
                data: [200, 250, 110, 15, 285, 15, 48, 65, 88, 15, 48, 105]
            }],
            grid: {
                top: 10,
                left: 0,
                right: 0,
                bottom: 20
            }
        });
    },
    methods: {
        handleSizeChange(ev) {
            const value = ev.target ? ev.target.value : ev;
            this.size = value
        }
    }
}
</script>

<style>

</style>
