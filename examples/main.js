import Vue from 'vue'
import App from './App.vue'
import XrUI from '../packages'

Vue.config.productionTip = false
Vue.use(XrUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
