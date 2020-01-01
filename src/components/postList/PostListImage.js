import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { HeroImage } from '../hero'

const ListingImageContainer = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;

  * {
    transition: all 0.25s ease-in-out;
  }

  &:hover {
    .gatsby-image-wrapper {
      opacity: 0.9;
      filter: grayscale(100%);
    }
    .image-text {
      transform: translate(-50%, -50%) scale(1);
      transition: transform 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
`

const ListingImageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.primary};
  transform: translate(-50%, -50%) scale(0);
  transition: transform 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: 15px;
    font-style: initial;
  }
`

const PostListImage = props => {
  const { node } = props
  return (
    <>
      <ListingImageContainer>
        <Link to={`/${node.uid}`}>
          <HeroImage data={node.data.body} />
          <ListingImageText className="image-text">
            <span>read more</span>
          </ListingImageText>
        </Link>
      </ListingImageContainer>
    </>
  )
}

export default PostListImage

PostListImage.propTypes = {
  node: PropTypes.object.isRequired,
}
