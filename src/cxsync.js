import cxsync from 'cxsync'

const stranger = cxsync

export const addRule = stranger
export const renderCssToString = () => cxsync.css
export const resetCache = () => cxsync.reset

stranger.addRule = addRule
stranger.renderCssToString = renderCssToString
stranger.resetCache = resetCache

export default stranger
