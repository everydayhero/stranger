import React, { PropTypes } from 'react'
import withContext from 'recompose/withContext'

const BaseProvider = ({ children }) => (
  <div>{children}</div>
)

const TraitsProvider = withContext(
  { traits: PropTypes.object },
  ({ traits }) => ({ traits })
)(BaseProvider)

export default TraitsProvider
