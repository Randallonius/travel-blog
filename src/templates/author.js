import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, SEO } from '../components'
import website from '../../config/website'
import PostPage from './Postpage'

const Author = ({
  pageContext: { author },
  data: {
    authPosts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Author: ${author} | ${website.titleAlt}`} pathname={location.pathname} />
    <PostPage location={location} topic={author} totalCount={totalCount} posts={edges} />
  </Layout>
)

Author.propTypes = {
  pageContext: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    authPosts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Author

export const pageQuery = graphql`
  query AuthorPage($ID: ID!) {
    authPosts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: { data: { author_group: { elemMatch: { author: { id: { eq: $ID } } } } } }
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
