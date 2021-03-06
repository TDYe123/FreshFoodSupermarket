// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import echarts from 'echarts'
import VueCharts from 'vue-chartjs'
//axios
import axios from 'axios'
import Qs from 'qs'
import $ from 'jquery'
import VueCookies from 'vue-cookies'
import AreaData from 'area-data' //地区插件
import 'vue-area-linkage/dist/index.css'; //地区插件
import VueAreaLinkage from 'vue-area-linkage';//地区插件
import moment from 'moment'

Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)

})
Vue.use(VueAreaLinkage);//地区插件


Vue.use(VueCookies) //cookie插件
axios.defaults.withCredentials=true 
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.prototype.serverUrl = 'http://www.datastreams.club:3000'
Vue.prototype.$echarts = echarts
Vue.prototype.headconfig = {
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  }
}
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueCharts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,VueCharts },
  template: '<App/>'
})
