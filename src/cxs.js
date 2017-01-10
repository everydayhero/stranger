import cxs from 'cxs'
import pipe from 'lodash/fp/pipe'
import merge from 'lodash/merge'

//  TODO: Add prefixer to only rule output not classes

const mergeStyles = (...styles) => styles.length === 1
  ? styles[0]
  : merge(...styles)

const stranger = cxs

export const addRule = pipe(mergeStyles, cxs)

export const renderCssToString = cxs.getCss

export const resetCache = cxs.reset

stranger.addRule = addRule
stranger.renderCssToString = renderCssToString
stranger.resetCache = resetCache

export default stranger
