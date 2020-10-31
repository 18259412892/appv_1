<template>
<div>
    <Loading num="2" v-if="menuApi" />
    <template v-if="!menuApi">
        index
    </template>
</div>
</template>

<script>
import Vue from 'vue'
import Loading from "@/packges/Loading/index.js";
Vue.use(Loading);
import * as types from '@/store/action-type'
import {
    mapState,
    mapActions
} from 'vuex';
export default {
    name: "Home",
    components: {
        Loading,
    },
    computed: {
        ...mapState(['menuApi']),
    },
    methods: {
        ...mapActions([types.SET_MENU_API])
    },
    data() {
        return {
            apiLoading: true,
        }
    },
    created() {
        setTimeout(() => {
            // this[types.SET_MENU_API]();
        }, 3000)
    }
};
</script>
