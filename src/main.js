import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入Fragment，主要解决菜单栏缩放文字不隐藏问题
import Fragment from 'vue-fragment'
//引入three.js
import * as Three from 'three'
//引入echarts
import * as echarts from 'echarts'
//引入封装axios
import service from './utils/request'
// 引入element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入元素大小监控插件
import elementLinster from 'element-resize-detector'
//引入cesium
const cesium = require('cesium/Build/Cesium/Cesium.js');
const widgets = require('cesium/Build/Cesium/Widgets/widgets.css');

//使用组件
Vue.use(Fragment.Plugin)
Vue.use(ElementUI)

//注册事件
Vue.prototype.$axios=service.rest
Vue.prototype.$echarts=echarts
Vue.prototype.$cesium = cesium
Vue.prototype.$widgets = widgets
Vue.prototype.$Three = Three

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
