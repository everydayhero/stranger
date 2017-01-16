import { PropTypes } from 'react'
import mapProps from 'recompose/mapProps'
import getContext from 'recompose/getContext'
import pipe from 'lodash/fp/pipe'
import rug from 'the-rug'
import { addRule } from '../'

export const strangerComp = (styles = {}) =>
  (Component = 'div', cancelPassThrough) => (
    pipe(
      mapProps(props => {
        const {
          traits,
          styles: newStyles,
          ...rest
        } = props
        const passThroughStyles =
          typeof Component !== 'string' && !cancelPassThrough
        const stylesIsFunction = typeof styles === 'function'
        const stylesObj = stylesIsFunction
          ? styles({ props: rest, traits: traits || rug })
          : styles
        const className = newStyles
          ? addRule(stylesObj, newStyles)
          : addRule(stylesObj)
        if (passThroughStyles) {
          return {
            ...rest,
            className: className,
            styles: stylesObj
          }
        }
        return {
          ...rest,
          className: className
        }
      }),
      getContext({ traits: PropTypes.object })
  )(Component)
)

export default strangerComp
