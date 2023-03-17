import { describe, it, expect } from 'vitest'

import HelloWorld from '../components/HelloWorld.vue'
import { mount } from '@vue/test-utils'

describe('HelloWorld', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.vm).toBeTruthy()
  })
})