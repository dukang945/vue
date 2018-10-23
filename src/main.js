// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
import router from './router'


//引入mintui
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//引用mui样式
import '../src/assets/lib/mui/css/mui.min.css'
import '../src/assets/lib/mui/css/icons-extra.css'
// 导入 vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource)
//设置跟路径
Vue.http.options.root = "http://027xin.com:8899"
//配置post请求第二个参数
Vue.http.options.emulateJSON = true

//导入时间组件
import moment from 'moment'
Vue.filter('dateformat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',

  router,
  components: {
    App
  },
  template: '<App/>'
})
