<template>
<div class="t-card">
    <a-card :bordered="false" hoverable class="list">
        <div class="title">{{title}}</div>
        <div class="value">{{value}}</div>
        <div class="chart">
            <slot name="chart"></slot>
        </div>
        <div class="line" />
        <div class="total">
            <slot name="footer"> </slot>
        </div>
    </a-card>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '标题'
        },
        value: {
            type: String,
            default: '数字'
        }
    }
}
</script>

<style>

</style>
