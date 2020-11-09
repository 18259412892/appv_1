import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import  'ant-design-vue/dist/antd.css';
import '@/assets/styles/index.scss'
Vue.config.productionTip = false
Vue.use(Antd)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import './packges/Echarts/echartscss.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
