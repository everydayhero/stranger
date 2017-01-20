/* global describe it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import comp from '../component.js'

describe('comp', () => {
  it('should remove invalid html tags from React element based components', () => {
    const StyledComp = comp(() => ({
      color: 'red'
    }))('div')
    const component = renderer.create(
      <StyledComp notAValidProp='Noooo!' />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should not remove invalid html tags from native React Components', () => {
    const StyledComp = comp(() => ({
      color: 'red',
      backgroundColor: 'blue'
    }))('div')
    const StyledCompInehrit = comp(() => ({
      color: 'white'
    }))(StyledComp)
    const component = shallow(
      <StyledCompInehrit notAValidProp='Noooo!' />
    )
    expect(component.props()).toMatchSnapshot()
  })
})
