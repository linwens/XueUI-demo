/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import XuIcon from './icon'
import XuTest from './test'
const version = '0.1.0'
const components = [
  XuIcon,
  XuTest
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  XuIcon,
  XuTest
}
export default {
  install,
  version
}
