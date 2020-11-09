<template>
<div>
    <Topview />
</div>
</template>

<script>
import Topview from '@/components/Echarts/list/Topview/index'
import Slaesview from '@/components/Echarts/list/Slaesview/index'
import Bottomview from '@/components/Echarts/list/Bottomview/index'
import Mapview from '@/components/Echarts/list/Mapview/index'
export default {
    components: {
        Topview,
        Slaesview,
        Bottomview,
        Mapview
    }
}
</script>

<style>

</style>
