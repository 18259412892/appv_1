<template>
<div class="t-echarts-top-view">
    <a-row :gutter="20">
        <a-col :span="6">
            <Card title="累计销售额" value="￥ 32,039,165">
                <template v-slot:chart>
                    <div class="compare"></div>
                </template>
                <template v-slot:footer>
                    <span>昨日销售额</span>
                    <span class="money">￥30,000,000</span>
                </template>
            </Card>
        </a-col>
        <a-col :span="6">
            <Card title="累计订单量" value="2,115,165">
                <template v-slot:chart>
                    内容
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
    }
}
</script>

<style>

</style>
