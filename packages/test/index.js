// 为组件提供 install 方法，供组件对外按需引入
import XuTest from './src/test'
XuTest.install = Vue => {
  Vue.component(XuTest.name, XuTest)
}
export default XuTest
