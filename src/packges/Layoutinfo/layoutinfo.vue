<template>
<div class="t-layout-info">
    <div class="t-layout-info-header">
        <slot name="header" v-if="header"></slot>
        <template v-else>
            {{title}}
        </template>
    </div>
    <div class="t-layout-info-content">
        <slot name="content" v-if="content"></slot>
        <template v-else>
            使用插槽 v-slot:content 内容 content = true
        </template>

    </div>
</div>
</template>

<script>
export default {
    name: 'tLayoutInfo',
    props: {
        title: {
            type: String,
            default: '标题'
        },
        header: {
            type: Boolean,
            default: false
        },
        content: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>
