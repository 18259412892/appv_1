export default [
    {
        path: '/form',
        name: 'form',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/Form/form.vue'),
        meta:{
            needLogin:false
        }
    },
]