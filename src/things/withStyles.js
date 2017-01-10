import mapProps from 'recompose/mapProps'
import stylesToClasses from './stylesToClasses'

const withStyles = (styles) => (
  mapProps(props => {
    const stylesIsFunction = typeof styles === 'function'
    const stylesObj = stylesIsFunction ? styles(props) : styles
    return {
      ...props,
      styles: stylesObj,
      classNames: stylesToClasses(stylesObj)
    }
  })
)

export default withStyles
