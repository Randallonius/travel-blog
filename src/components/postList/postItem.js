import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import PostListImage from './PostListImage'
import PostListText from './PostListText'

const Item = styled.div`
  padding-bottom: 15px;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    padding-bottom: 20px;
  }

  &.masonry {
    @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
      width: 100%;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
      box-sizing: border-box;
      width: calc(100% / 2);
      float: left;
      padding: 15px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
      padding: 0 20px 40px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
      width: calc(100% / 3);
      padding-left: 25px;
      padding-right: 25px;
      padding-bottom: 50px;
    }
  }
`

class PostItem extends Component {
  render() {
    const { node, categories, location, author } = this.props
    const listSize = location.pathname === '/' ? 'masonry' : ''
    return (
      <Item className={listSize}>
        <PostListImage node={node} />
        <PostListText node={node} categories={categories} author={author} />
      </Item>
    )
  }
}

export default PostItem

PostItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
}
