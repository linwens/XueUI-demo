import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Counter from '~/test/src/test.vue'

describe('Counter', () => {
  const wrapper = mount(Counter)
  // 测试挂载的dom对不对
  it('renders the correct markup', () => {
    expect(wrapper.html()).to.include('<div class="xu-test">0</div>')
  })

  // 测点击 +1 效果
  it('click should increment the count', () => {
    expect(wrapper.vm.num).to.equal(0)
    const button = wrapper.vm
    button.$el.click()
    expect(wrapper.vm.num).to.equal(1)
  })
})
