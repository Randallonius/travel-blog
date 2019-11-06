import React, { Component } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import HeroImage from './heroImage'

const Hero = styled.div`
  position: relative;
`

const ImageContainer = styled.div`
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    .gatsby-image-wrapper {
      max-height: 600px;
    }
  }
  div {
    padding: 0;
  }
`

class HeroImageContainer extends Component {
  render() {
    // const { body } = this.props
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