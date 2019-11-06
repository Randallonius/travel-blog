import React, { Component } from "react"
import HeroImage from './heroImage'
import styled from '@emotion/styled'

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
    return(
      <Hero>
        <ImageContainer>
          <HeroImage data={this.props.data.body}/>
        </ImageContainer>
      </Hero>
    )
  }
}

export default HeroImageContainer