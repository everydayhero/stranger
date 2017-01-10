import { addRule } from '../'

const stylesToClasses = (styles = {}) => (
  Object.keys(styles).reduce((acc, key) => ({
    ...acc,
    [key]: addRule(styles[key])
  }), {})
)

export default stylesToClasses
