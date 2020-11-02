<template>
<a-row>
    <a-col :span="4" class="header-login">LOGIN</a-col>
    <a-col :span="16" class="heder-menu">
        <a-menu class="header-menu-lis" v-model="current" mode="horizontal" @click="clickHander">
            <a-sub-menu class="header-menu-lis1">
                <span slot="title" class="submenu-title-wrapper">
                    内容
                </span>
                <a-menu-item key="/article">
                    发布文章
                </a-menu-item>
                <a-menu-item key="/info">
                    表单详情
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu class="header-menu-lis1">
                <span slot="title" class="submenu-title-wrapper">
                    订单
                </span>
                <a-menu-item key="/orderlist">
                    列表
                </a-menu-item>
                <a-menu-item key="/modal">
                    Modal 对话框
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu class="header-menu-lis1">
                <span slot="title" class="submenu-title-wrapper">
                    表单
                </span>
                <a-menu-item key="/info3">
                    info
                </a-menu-item>
                <a-menu-item key="/modal2">
                    Modal 对话框
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu class="header-menu-lis1">
                <span slot="title" class="submenu-title-wrapper">
                    图表
                </span>
                <a-menu-item key="/Nestedpies">
                    Nestedpies
                </a-menu-item>
                <a-menu-item key="/modal23">
                    Modal 对话框
                </a-menu-item>
            </a-sub-menu>
        </a-menu>

    </a-col>
    <a-col :span="4">
        <!-- <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                Hover me
                <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
                <a-menu-item>
                    <a href="javascript:;">退出</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown> -->
        <a-menu v-model="current" mode="horizontal" @click="clickHander" class="heaer-login-reg">
            <a-menu-item key="/login">
                登录
            </a-menu-item>
            <a-menu-item key="/reg">
                注册
            </a-menu-item>
        </a-menu>
    </a-col>
</a-row>
</template>

<script>
export default {
    data() {
        return {
            current: ['home']
        }
    },
    methods: {
        clickHander(ev) {
            this.$router.push(ev.key)

        }
    }
}
</script>

<style>

</style>
