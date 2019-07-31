import Vue from 'vue'
import App from './App.vue'
import router from './router'
import XrUI from '../packages'
import demoBlock from './components/demo-block.vue'

Vue.config.productionTip = false
Vue.use(XrUI)
Vue.component('demo-block', demoBlock)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
