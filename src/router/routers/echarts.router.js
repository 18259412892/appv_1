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
]