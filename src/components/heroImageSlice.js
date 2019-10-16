import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeroImage from '../slices/heroImage'

class HeroImageSlice extends Component {
  render() {
    const { data } = this.props
    const slice = data.map(s =>
      s.slice_type && s.slice_type === 'hero_image' ? <HeroImage key={s.id} input={s} /> : null
    )
    return (
      <div>
        {slice}
      </div>
    )
  }
}

export default HeroImageSlice

HeroImageSlice.propTypes = {
  data: PropTypes.array.isRequired,
}