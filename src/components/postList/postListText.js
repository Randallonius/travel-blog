import React from 'react'
import PropTypes, { oneOfType } from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import kebabCase from 'lodash/kebabCase'
import Excerpt from '../Excerpt'
import PostListCategories from './PostListCategories'

const ListingText = styled.div`
  background-color: ${props => props.theme.colors.white};
`

const ListingTextInner = styled.div`
  text-align: center;
  padding: 38px 40px 20px 40px;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding: 38px 40px 20px 40px;
  }
`

const ListingTitle = styled.h4`
  margin-bottom: 5px;
  margin-top: 0;
`

const ListingInfo = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  font-size: 1.375em;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.grey};
    text-decoration: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`

const CategoryContainer = styled.div`
  color: ${props => props.theme.colors.grey};
  font-size: 0.75em;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.colors.grey};
    font-style: normal;
    transition: all 0.25s ease-in-out;
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
    }
  }
`

const CategoryInner = styled.span`
  padding-left: 4px;
`

const PostListText = props => {
  const { node, author, categories } = props
  return (
    <ListingText>
      <ListingTextInner>
        <ListingTitle>
          <StyledLink to={`/${node.uid}`}>{node.data.title.text}</StyledLink>
        </ListingTitle>
        {categories && (
          <CategoryContainer>
            <span>In</span>
            <CategoryInner>{categories && <PostListCategories categories={categories} />}</CategoryInner>
          </CategoryContainer>
        )}
        <div>
          <Excerpt excerptSlices={node.data.body} />
        </div>
        <ListingInfo>
          <span>
            By <Link to={`/authors/${kebabCase(author)}`}>{author}</Link>
          </span>
          <span>{node.data.date}</span>
        </ListingInfo>
      </ListingTextInner>
    </ListingText>
  )
}

PostListText.propTypes = {
  node: PropTypes.object.isRequired,
  author: PropTypes.array.isRequired,
  categories: oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
}

export default PostListText
