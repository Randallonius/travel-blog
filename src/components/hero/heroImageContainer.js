import React, { Component } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import HeroImage from './HeroImage'

const Hero = styled.div`
  position: relative;
  overflow: hidden;
`

const ImageContainer = styled.div`
  width: 100%;
  div {
    padding: 0;
  }
`

class HeroImageContainer extends Component {
  render() {
    const {
      data: { body },
    } = this.props
    return (
      <Hero>
        <ImageContainer>
          <HeroImage data={body} />
        </ImageContainer>
      </Hero>
    )
  }
}

export default HeroImageContainer

HeroImageContainer.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.array.isRequired,
  }).isRequired,
}
