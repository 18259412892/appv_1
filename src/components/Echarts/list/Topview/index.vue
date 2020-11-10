<template>
<div class="t-echarts-top-view">
    <a-row :gutter="20">
        <a-col :span="6">
            <Card title="累计销售额" value="￥ 32,039,165">
                <template v-slot:chart>
                    <div class="compare-wrapper">
                        <div class="compare">
                            <span>日同比</span>
                            <span class="emphasis">7.33%</span>
                            <div class="increase" />
                        </div>
                        <div class="compare">
                            <span>月同比</span>
                            <span class="emphasis">7.33%</span>
                            <div class="decrease" />
                        </div>
                    </div>

                </template>
                <template v-slot:footer>
                    <span>昨日销售额</span>
                    <span class="emphasis">￥30,000,000</span>
                </template>
            </Card>
        </a-col>
        <a-col :span="6">
            <Card title="累计订单量" value="2,115,165">
                <template v-slot:chart>
                    <div id="tital-order-chart" :style="{width:'100%',height:'100%'}" />
                </template>
                <template v-slot:footer>
                    <span>昨日订单量</span>
                    <span class="emphasis">20,000,000</span>
                </template>
            </Card>
        </a-col>
        <a-col :span="6">
            <Card title="今日交易用户数" value="039,165">
                <template v-slot:chart>
                    内容
                </template>
            </Card>
        </a-col>
        <a-col :span="6">
            <Card title="累计用户数" value="1032,039,165">
                <template v-slot:chart>
                    内容
                </template>
            </Card>
        </a-col>
    </a-row>
</div>
</template>

<script>
import Card from '../../../Card/card'
export default {
    components: {
        Card
    },
    mounted() {
        const chartDom = document.querySelector('#tital-order-chart');
        const chart = this.$echarts.init(chartDom, 'wonderland');
        const options = {
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
        }
        chart.setOption(options);
    }
}
</script>

<style>

</style>
