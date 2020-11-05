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
        path: '/forminfoAdd',
        name: 'forminfoAdd',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/Form/forminfoAdd.vue'),
        meta:{
            needLogin:false
        }
    },
    {
        path: '/forminfoEdit',
        name: 'forminfoEdit',
        component: ()=>import(/*webpackChunkName: "Orderlist"*/'@/views/Form/forminfoEdit.vue'),
        meta:{
            needLogin:false
        }
    },
]