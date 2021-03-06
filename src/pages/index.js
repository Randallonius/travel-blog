import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, SEO, Title, Wrapper } from '../components'
import { MasonryPosts } from '../components/postList'
import { InstagramList } from '../components/instagram'
import HomepageHeroContainer from '../components/hero/HomepageHeroContainer'

const IndexWrapper = Wrapper.withComponent('main')

class IndexPage extends Component {
  render() {
    const {
      data: { posts, instagrams },
      location,
    } = this.props
    return (
      <Layout>
        <SEO title="Home" />
        <HomepageHeroContainer />
        <IndexWrapper style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <Title>Recent Posts</Title>
          <MasonryPosts posts={posts.edges} location={location} />
          <Title>Instagram</Title>
          <InstagramList instagrams={instagrams.edges} />
        </IndexWrapper>
      </Layout>
    )
  }
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
    instagrams: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
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
    instagrams: allInstaNode(limit: 8, sort: { fields: [timestamp], order: DESC }) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`
