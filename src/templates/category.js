import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Aside, Layout, Title, SEO } from '../components'
import website from '../../config/website'
import { MasonryPosts } from '../components/postList'
import { TemplateContainer, TemplateContent, Wrapper } from './TemplateStyle'

const TagWrapper = Wrapper.withComponent('main')

const Category = ({
  pageContext: { category },
  data: {
    catPosts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Category: ${category} | ${website.titleAlt}`} pathname={location.pathname} />
    <TagWrapper>
      <TemplateContainer>
        <TemplateContent>
          <Title>
            {totalCount} {totalCount === 1 ? 'Post' : 'Posts'} {totalCount === 1 ? 'was' : 'were'} categorized with "
            {category}"
          </Title>
          <MasonryPosts posts={edges} location={location} />
        </TemplateContent>
        <Aside />
      </TemplateContainer>
    </TagWrapper>
  </Layout>
)

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    catPosts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    catPosts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          categories: { elemMatch: { category: { document: { elemMatch: { data: { name: { eq: $category } } } } } } }
        }
      }
    ) {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "MMMM DD YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
            tags {
              tag {
                document {
                  data {
                    name
                  }
                }
              }
            }
            author_group {
              author {
                document {
                  data {
                    name
                    interests
                    stamps
                    favorite_country
                    title
                  }
                }
              }
            }
            body {
              ... on PrismicPostBodyText {
                slice_type
                id
                primary {
                  text {
                    text
                  }
                }
              }
              ... on PrismicPostBodyHeroImage {
                slice_type
                id
                primary {
                  image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 800, quality: 90) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
