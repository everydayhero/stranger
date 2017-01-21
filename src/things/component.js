import { PropTypes } from 'react'
import mapProps from 'recompose/mapProps'
import getContext from 'recompose/getContext'
import pipe from 'lodash/fp/pipe'
import omit from 'lodash/omit'
import rug from 'the-rug'
import { addRule } from '../'

export const strangerComp = (styles = {}, options = {}) =>
  (Component = 'div', cancelPassThrough) => (
    pipe(
      mapProps(props => {
        const {
          traits,
          styles: existingStyles,
          ...rest
        } = props
        const stylesObj = typeof styles === 'function'
          ? styles({ props: rest, traits: traits || rug })
          : styles
        const className = existingStyles
          ? addRule(stylesObj, existingStyles)
          : addRule(stylesObj)
        return {
          ...options.removeProps ? omit(rest, options.removeProps) : rest,
          ...typeof Component !== 'string' && !cancelPassThrough && { styles: stylesObj },
          className
        }
      }),
      getContext({ traits: PropTypes.object })
  )(Component)
)

export default strangerComp
