export default [
    {
      path:'/login',
      component:()=>import(/*webpackChunkName: 'login'*/'@/views/User/login.vue')
    },
    {
      path:'/reg',
      component:()=>import(/*webpackChunkName: 'reg'*/'@/views/User/reg.vue')
    },
    {
      path:'/forget',
      component:()=>import(/*webpackChunkName: 'forget'*/'@/views/User/forget.vue')
    }
    ,
    {
      path:'/article',
      component:()=>import(/*webpackChunkName: 'forget'*/'@/views/User/article.vue'),
      meta:{
        needLogin:true
      }
    }
  ]
  