import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import  'ant-design-vue/dist/antd.css';
import '@/assets/styles/index.scss'
import './plugins/vcharts'
Vue.config.productionTip = false
Vue.use(Antd)
import VueEcharts from 'vue-echarts';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import './packges/Echarts/echartscss.js'

Vue.component('vue-echarts', VueEcharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
