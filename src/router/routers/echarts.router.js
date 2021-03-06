export default [
    {
        path: '/Nestedpies',
        name: 'nestedpies',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/Echarts/Nestedpies.vue'),
        meta:{
            needLogin:false
        }
    },
    {
        path: '/echartslist',
        name: 'echartslist',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/Echarts/echartslist.vue'),
        meta:{
            needLogin:false
        }
    },
    {
        path: '/bmap',
        name: 'bmap',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/map/bmap.vue'),
        meta:{
            needLogin:false
        }
    },
]