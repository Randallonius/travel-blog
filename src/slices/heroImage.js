import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const HeroImage = ({ input }) => (
  <div>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} alt={input.primary.image.alt} />
  </div>
)

export default HeroImage

HeroImage.propTypes = {
  input: PropTypes.object.isRequired,
}