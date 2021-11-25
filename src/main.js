import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
//引入echarts
import * as echarts from 'echarts'
//引入封装axios
import service from './utils/request'
//引入cesium
const cesium = require('cesium/Build/Cesium/Cesium.js');
const widgets = require('cesium/Build/Cesium/Widgets/widgets.css');

Vue.prototype.$axios=service.rest
Vue.prototype.$echarts=echarts
Vue.prototype.$cesium = cesium
Vue.prototype.$widgets = widgets

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
