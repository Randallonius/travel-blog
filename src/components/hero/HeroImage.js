import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

class HeroImage extends Component {
  render() {
    const { data } = this.props
    const imageData = data.map(s =>
      s.slice_type && s.slice_type === 'hero_image' ? (
        <div>
          <Img key={s.id} fluid={s.primary.image.localFile.childImageSharp.fluid} />
        </div>
      ) : null
    )
    return <div>{imageData}</div>
  }
}

export default HeroImage

HeroImage.propTypes = {
  data: PropTypes.array.isRequired,
}
