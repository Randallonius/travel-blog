import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, SEO } from '../components'
import website from '../../config/website'
import PostPage from './Postpage'

const Category = ({
  pageContext: { category },
  data: {
    catPosts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Category: ${category} | ${website.titleAlt}`} pathname={location.pathname} />
    <PostPage location={location} topic={category} totalCount={totalCount} posts={edges} />
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
  query CategoryPage($ID: ID!) {
    catPosts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: { data: { categories: { elemMatch: { category: { id: { eq: $ID } } } } } }
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
                  ... on PrismicCategory {
                    data {
                      name
                    }
                  }
                }
              }
            }
            tags {
              tag {
                document {
                  ... on PrismicTag {
                    data {
                      name
                    }
                  }
                }
              }
            }
            author_group {
              author {
                document {
                  ... on PrismicAuthor {
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
                    fluid(maxWidth: 800, maxHeight: 400) {
                      ...GatsbyPrismicImageFluid
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
