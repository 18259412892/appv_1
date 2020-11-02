<template>
<a-row>
    <a-col :span="4" class="header-login">LOGIN</a-col>
    <a-col :span="18" class="heder-menu">
        <a-menu class="header-menu-lis" v-model="current" mode="horizontal" @click="clickHander">
            <a-sub-menu v-for="(item,index) in Menu" :key="index" class="header-menu-lis1">
                <span slot="title" class="submenu-title-wrapper">
                    {{item.name}}
                </span>
                <a-menu-item :key="v.path" v-for="(v) in item.children">
                    {{v.name}}
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-col>
    <a-col :span="2">
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
import Menu from '@/config/menu'
export default {

    data() {
        return {
            current: ['home'],
            Menu: Menu
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
