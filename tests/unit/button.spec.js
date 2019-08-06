import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Button from '~/button/src/button.vue'
chai.use(sinonChai)

describe('Button', () => {

  it('存在', () => {
    const wrapper = mount(Button)
    expect(wrapper.html()).to.include('<button class="xu-button xu-button--default xu-button--default"><!----><!----><span></span></button>')
  })
  // 能否设置icon
  it('可以设置icon', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'xu-icon-taobao'
      }
    })
    const el = wrapper.find('i')
    expect(el.attributes()['class']).to.equal('xu-icon-taobao')
  })
})
