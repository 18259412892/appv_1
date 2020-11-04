export default [
    {
        path: '/form',
        name: 'form',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/Form/form.vue'),
        meta:{
            needLogin:false
        }
    },
    {
        path: '/forminfo',
        name: 'forminfo',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/Form/forminfo.vue'),
        meta:{
            needLogin:false
        }
    },
]