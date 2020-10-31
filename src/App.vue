<template>
<div id="app">
    <template v-if="menuApi">
        <a-layout>
            <a-layout-header>
                <PageHeader />
            </a-layout-header>
            <a-layout :class="[['/login','/reg'].includes(this.$route.path) && 'g-content-reg-log']">
                <a-layout-content>
                    <a-spin tip="加载中...">
                        <router-view />
                    </a-spin>
                </a-layout-content>

            </a-layout>
        </a-layout>
    </template>
    <template v-if="!menuApi">
        <router-view />
    </template>
</div>
</template>

<script>
import {
    getBannerList,
    getBannerCommon
} from './api/public.js'
import PageHeader from '@/components/Layout/PageHeader';
import {
    mapState
} from 'vuex'
export default {
    components: {
        PageHeader
    },
    computed: {
        ...mapState(['menuApi']),
    },
    created() {
        getBannerList({
            page: 1
        });
        getBannerCommon({
            page_size: 2
        })
    }
}
</script>>
