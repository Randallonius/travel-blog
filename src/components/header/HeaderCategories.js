import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import kebabCase from 'lodash/kebabCase'

const CategoryLink = styled(Link)`
  font-size: 0.8rem;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 0.625rem;
    font-size: 1.2rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.2rem;
  }

  :after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.accentBlue};
    transition: width 0.25s;
    position: relative;
    top: 5px;
  }

  :hover::after {
    width: 100%;
  }
`

const Circle = styled.span`
  width: 0.25em;
  height: 0.25em;
  background: ${props => props.theme.colors.accentBlue};
  border-radius: 50%;
  margin: 0 10px;
`

const HeaderCategories = () => (
  <StaticQuery
    query={categoryQuery}
    render={({ allPrismicCategory }) =>
      allPrismicCategory.edges.map(({ node }, i) => (
        <React.Fragment key={node.id}>
          {!!i && <Circle />}
          <CategoryLink key={node.data.name} to={`/categories/${kebabCase(node.data.name)}`}>
            {node.data.name}
          </CategoryLink>
        </React.Fragment>
      ))
    }
  />
)

export default HeaderCategories

export const categoryQuery = graphql`
  query CategoryListing {
    allPrismicCategory {
      edges {
        node {
          data {
            name
          }
          id
        }
      }
    }
  }
`
