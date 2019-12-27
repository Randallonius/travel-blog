import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import kebabCase from 'lodash/kebabCase'
import TagLink from './TagLink'

const AsideWrapper = styled.section`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    display: block;
    width: 25%;
  }
`

const AsideContainer = styled.div`
  margin-bottom: 1.45rem;
`

const AsideTitle = styled.div`
  background-color: ${props => props.theme.colors.primary};
  h4 {
    color: ${props => props.theme.colors.white};
    padding: 1rem;
  }
  :first-of-type {
    h4 {
      margin-top: 0;
    }
  }
`

const StyledLink = styled(Link)`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.grey};
    text-decoration: none;
  }
`

const Aside = () => {
  const data = useStaticQuery(graphql`
    query AsideQuery {
      asidePosts: allPrismicPost(limit: 5, sort: { fields: [data___date], order: DESC }) {
        edges {
          node {
            uid
            data {
              title {
                text
              }
            }
          }
        }
      }
      categories: allPrismicCategory {
        edges {
          node {
            data {
              name
            }
          }
        }
      }
      tags: allPrismicTag {
        edges {
          node {
            data {
              name
            }
          }
        }
      }
    }
  `)
  const PostList = data.asidePosts.edges.map(edge => (
    <StyledLink key={edge.node.uid} to={edge.node.uid}>
      {edge.node.data.title.text}
    </StyledLink>
  ))
  const CatList = data.categories.edges.map(edge => (
    <StyledLink key={edge.node.data.name} to={`/categories/${kebabCase(edge.node.data.name)}`}>
      {edge.node.data.name}
    </StyledLink>
  ))
  const TagList = data.tags.edges.map(edge => edge.node.data.name)
  return (
    <AsideWrapper>
      <AsideContainer>
        <AsideTitle>
          <h4>Recent Posts</h4>
        </AsideTitle>
        {PostList}
      </AsideContainer>
      <AsideContainer>
        <AsideTitle>
          <h4>Categories</h4>
        </AsideTitle>
        {CatList}
      </AsideContainer>
      <AsideContainer>
        <AsideTitle>
          <h4>Tags</h4>
        </AsideTitle>
        <TagLink tags={TagList} />
      </AsideContainer>
    </AsideWrapper>
  )
}

export default Aside
