import { PropTypes } from 'react'
import mapProps from 'recompose/mapProps'
import getContext from 'recompose/getContext'
import pipe from 'lodash/fp/pipe'
import omit from 'lodash/fp/omit'
import rug from 'the-rug'
import { addRule } from '../'
import validAttr from './reactValidHtmlAttr.js'

export const strangerComp = (styles = {}) =>
  (Component = 'div', cancelPassThrough) => (
    pipe(
      mapProps(props => {
        const {
          traits,
          styles: existingStyles,
          ...rest
        } = props
        const componentIsTag = typeof Component === 'string'
        const stylesObj = typeof styles === 'function'
          ? styles({ props: rest, traits: traits || rug })
          : styles
        const className = existingStyles
          ? addRule(stylesObj, existingStyles)
          : addRule(stylesObj)
        return {
          ...componentIsTag ? omit(rest, validAttr) : rest,
          ...!componentIsTag && !cancelPassThrough && { styles: stylesObj },
          className
        }
      }),
      getContext({ traits: PropTypes.object })
  )(Component)
)

export default strangerComp
