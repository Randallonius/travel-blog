import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { FiHeart } from 'react-icons/fi'
import website from '../../../config/website'

const ItemContainer = styled.div`
  width: calc(1 / 2 * 100% - (1 - 1 / 2) * 0.625em);

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    height: 15.625em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    width: calc(1 / 4 * 100%);
    height: 12.5em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    width: calc(1 / 8 * 100%);
    height: 9.375em;
  }
`
const Item = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  * {
    transition: all 0.25s ease-in-out;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  &:hover {
    .gatsby-image-wrapper {
      opacity: 0.9;
      filter: grayscale(100%);
    }
    .insta-likes {
      transform: translate(-50%, -50%) scale(1);
      transition: transform 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
`

const Likes = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${props => props.theme.colors.white};
  width: 50px;
  height: 50px;
  line-height: 60px;
  background: ${props => props.theme.colors.primary};
  transform: translate(-50%, -50%) scale(0);
  transition: transform 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: 3px;
  }
`

export default class InstagramItem extends Component {
  render() {
    const { node } = this.props
    return (
      <ItemContainer>
        <Item href={`http://www.instagram.com/${website.instagram}/p/${node.id}`}>
          <Img fluid={node.localFile.childImageSharp.fluid} alt="Instagram Image"/>
          <Likes className="insta-likes">
            <span>{node.likes}</span>
            <span>
              <FiHeart />
            </span>
          </Likes>
        </Item>
      </ItemContainer>
    )
  }
}

InstagramItem.propTypes = {
  node: PropTypes.object.isRequired,
}
