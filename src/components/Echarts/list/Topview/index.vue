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
                    <div id="total-order-chart" :style="{width:'100%',height:'100%'}" />
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
                    <div id="today-users-chart" :style="{width:'100%',height:'100%'}" />
                </template>
                <template v-slot:footer>
                    <span>退货费</span>
                    <span class="emphasis">5.14%</span>
                </template>
            </Card>
        </a-col>
        <a-col :span="6">
            <Card title="累计用户数" value="1032,039,165">
                <template v-slot:chart>
                    <div id="total-users-chart" :style="{width:'100%',height:'100%'}" />
                </template>
                <template v-slot:footer>
                    <div class="total-user-footer">
                        <span>日同比</span>
                        <span class="emphasis">8.73%</span>
                        <div class="increase"></div>

                        <span class="month">月同比</span>
                        <span class="emphasis">40.73%</span>
                        <div class="decrease"></div>
                    </div>

                </template>
            </Card>
        </a-col>
    </a-row>
</div>
</template>

<script>
import Card from '../../../Card/card';
import {
    commonOption
} from './options.js'
export default {
    components: {
        Card
    },
    mounted() {
        const chartDom = document.querySelector('#total-order-chart');
        const chartDom1 = document.querySelector('#today-users-chart');
        const chartDom2 = document.querySelector('#total-users-chart');
        const chart = this.$echarts.init(chartDom, 'wonderland');
        const chart1 = this.$echarts.init(chartDom1, 'wonderland');
        const chart2 = this.$echarts.init(chartDom2, 'wonderland');
        chart.setOption(commonOption.titalOrder);
        chart1.setOption(commonOption.todayUsers);
        chart2.setOption(commonOption.totalUsers);
    }
}
</script>

<style>

</style>
