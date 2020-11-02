export default [
    {
        path: '/Nestedpies',
        name: 'nestedpies',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/Echarts/Nestedpies.vue'),
        meta:{
            needLogin:false
        }
    },
]