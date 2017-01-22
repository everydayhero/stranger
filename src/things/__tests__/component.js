/* global describe it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import comp from '../component.js'

describe('comp', () => {
  it('should allow removing props from output components to avoid warnings', () => {
    const StyledComp = comp(({ props }) => ({
      color: props.color || 'red'
    }))('div', { removeProps: ['color'] })
    const component = renderer.create(
      <StyledComp color='green' />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should remove props even when they come from a native component', () => {
    const StyledComp = comp(({ props }) => ({
      color: props.color || 'red',
      backgroundColor: 'blue'
    }))('div')
    const StyledCompInehrit = comp(({ props }) => ({
      backgroundColor: props.black || 'black'
    }))(StyledComp, { removeProps: ['black'] })
    const componentObj = shallow(
      <StyledCompInehrit black='white' />
    )
    const component = renderer.create(
      <StyledCompInehrit black='white' />
    )
    const tree = component.toJSON()
    expect(componentObj.props()).toMatchSnapshot()
    expect(tree).toMatchSnapshot()
  })
})
