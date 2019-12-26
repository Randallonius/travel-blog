import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import kebabCase from 'lodash/kebabCase'

const CategoryLink = styled(Link)`
  font-size: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.2rem;
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
