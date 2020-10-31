<template>
<div>
    <Loading num="2" />
</div>
</template>

<script>
import Vue from 'vue'
import Loading from "@/packges/Loading/index.js";
Vue.use(Loading);
export default {
    name: "Home",
    components: {
        Loading,
    },
};
</script>
