import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, SEO } from '../components'
import website from '../../config/website'
import PostPage from './Postpage'

const Tag = ({
  pageContext: { tag },
  data: {
    tagPosts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Tag: ${tag} | ${website.titleAlt}`} pathname={location.pathname} />
    <PostPage location={location} topic={tag} totalCount={totalCount} posts={edges} />
  </Layout>
)

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    tagPosts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Tag

export const pageQuery = graphql`
  query TagPage($tag: String!) {
    tagPosts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: { data: { tags: { elemMatch: { tag: { document: { elemMatch: { data: { name: { eq: $tag } } } } } } } } }
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
