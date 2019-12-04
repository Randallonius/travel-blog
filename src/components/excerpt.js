import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExcerptSlice from '../slices'

class Excerpt extends Component {
  render() {
    const { excerptSlices } = this.props
    const slice = excerptSlices.map(s =>
      s.slice_type && s.slice_type === 'text' ? <ExcerptSlice key={s.id} input={s} /> : null
    )
    const firstSlice = slice.find(s => s)
    return <div>{firstSlice}</div>
  }
}

export default Excerpt

Excerpt.propTypes = {
  excerptSlices: PropTypes.array.isRequired,
}
