import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hero from '../../slices/hero'

class HeroImage extends Component {
  render() {
    const { data } = this.props
    const slice = data.map(s => (s.slice_type && s.slice_type === 'hero_image' ? <Hero key={s.id} input={s} /> : null))
    return <div>{slice}</div>
  }
}

export default HeroImage

HeroImage.propTypes = {
  data: PropTypes.array.isRequired,
}