import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, SEO } from '../components'
import PostPage from '../templates/Postpage'

class BlogPage extends Component {
  render() {
    const {
      data: {
        blogPosts: { edges },
      },
      location,
    } = this.props
    return (
      <Layout>
        <SEO title="Blog" pathname={location.pathname} />
        <PostPage topic="Blog Posts" posts={edges} location={location} />
      </Layout>
    )
  }
}

export default BlogPage

BlogPage.propTypes = {
  data: PropTypes.shape({
    blogPosts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query BlogQuery {
    blogPosts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
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
                    alt
                    fluid(maxWidth: 400) {
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
