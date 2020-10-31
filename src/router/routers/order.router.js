export default [
    {
        path: '/Orderlist',
        name: 'orderlist',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/Order/Orderlist/index.vue'),
        meta:{
            needLogin:false
        }
    },
]