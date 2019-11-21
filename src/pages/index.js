import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroImageContainer from '../components/hero/heroImageContainer'
import Wrapper from '../components/wrapper'
import Title from '../components/title'
import PostList from '../components/postList/postList'
import InstagramList from '../components/instagram/instagramList'

const IndexWrapper = Wrapper.withComponent('main')

class IndexPage extends Component {
  render() {
    const {
      data: { homepage, posts, instagrams },
      location,
    } = this.props
    return (
      <Layout>
        <SEO title="Home" />
        <HeroImageContainer data={homepage.data} />
        <IndexWrapper style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <Title>Recent Posts</Title>
          <PostList posts={posts.edges} location={location} />
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
    homepage: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    instagrams: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
        body {
          ... on PrismicHomepageBodyHeroImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1600) {
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
                        fluid(maxWidth: 400, quality: 90) {
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
                ...GatsbyImageSharpFluid
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
