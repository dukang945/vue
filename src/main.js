// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//引入mintui
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//引用mui样式
import '../src/assets/lib/mui/css/mui.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
