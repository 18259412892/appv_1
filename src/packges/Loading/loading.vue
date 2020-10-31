<template>
<div class="t-loading-body">
    <div :class="classs">
        <template v-if="num == 1">
            <div>l</div>
            <div>o</div>
            <div>a</div>
            <div>d</div>
            <div>i</div>
            <div>n</div>
            <div>g</div>
        </template>
        <template v-if="num == 2">
            <span class="circle">LOA
                <div class="scircle"></div>
                <div class="scircle"></div>
            </span>
            <span class="circle">D
                <div class="scircle"></div>
                <div class="scircle"></div>
            </span>
            <span class="circle">ING
                <div class="scircle"></div>
                <div class="scircle"></div>
            </span>
        </template>
        <template v-if="num == 3">
            <div>l</div>
            <div>o</div>
            <div>a</div>
            <div>d</div>
            <div>i</div>
            <div>n</div>
            <div>g</div>
        </template>
    </div>
</div>
</template>

<script>
export default {
    name: "tLoading",
    props: {
        num: {
            type: String,
            default: "1",
        },
    },
    computed: {
        classs() {
            if (!["1", "2", "3"].includes(this.num)) {
                console.error("Loading 类型必须为字符串", "1", "2", "3");
                return
            }
            const _class = [
                "loader",
                "t-loading",
                this.num && `t-loading-${this.num}`,
            ];
            return _class;
        },
    },
};
</script>
