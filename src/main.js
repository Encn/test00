import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'                     // 分页组件
import 'element-ui/lib/theme-default/index.css'        // 分页组件
import moment from 'moment'                            // 日期转换插件

import '../static/js/validate.js'
import tool from './components/pmPlugin/index.js'

Vue.use(ElementUI)
Vue.use(moment)
Vue.use(tool)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  // render: h => h(App)
})
