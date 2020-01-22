import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Content = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  max-width: 600px;
`
const ImageDescription = styled.div`
  padding-top: 0.9rem;
  border-bottom: 1px solid ${props => props.theme.colors.greyLight};
  font-size: 0.875em;
`
const Image = ({ input }) => (
  <Content>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} alt={input.primary.image.alt}/>
    <ImageDescription>
      <span>{input.primary.image.alt}</span>
    </ImageDescription>
  </Content>
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
