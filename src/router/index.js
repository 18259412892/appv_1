import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const files = require.context('./routers',false,/\.router.js/);
let routes = []
files.keys().forEach(key=>{
  routes.push(...files(key).default)
})
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})
export default router
