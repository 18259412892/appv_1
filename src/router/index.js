import Vue from 'vue'
import VueRouter from 'vue-router'
import hooks from './hooks'
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
Object.values(hooks).forEach(hook=>{
  router.beforeEach(hook.bind(router));
})
export default router
