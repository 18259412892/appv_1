<template>
<div id="app">

    <router-view />
</div>
</template>

<script>
import {
    getBannerList,
    getBannerCommon
} from './api/public.js'

export default {

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
