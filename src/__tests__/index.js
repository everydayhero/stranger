import { addRule } from '../index.js'

describe('addRule', () => {
  it('should merge 2 objects', () => {
    const style1 = {
      display: 'flex',
      color: 'red'
    }
    const style2 = {
      display: 'flex',
      color: 'blue'
    }
    const mergedStylesClasses = addRule(style1, style2)
    expect(mergedStylesClasses).toMatchSnapshot()
  })
})
