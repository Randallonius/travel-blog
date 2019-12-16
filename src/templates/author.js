import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Aside, Layout, Title, SEO } from '../components'
import website from '../../config/website'
import { MasonryPosts } from '../components/postList'
import { TemplateContainer, TemplateContent, Wrapper } from './TemplateStyle'

const TagWrapper = Wrapper.withComponent('main')

const Author = ({
  pageContext: { author },
  data: {
    authPosts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Author: ${author} | ${website.titleAlt}`} pathname={location.pathname} />
    <TagWrapper>
      <TemplateContainer>
        <TemplateContent>
          <Title>
            {totalCount === 1 ? 'Post' : 'Posts'} written by {author}
          </Title>
          <MasonryPosts posts={edges} location={location} />
        </TemplateContent>
        <Aside />
      </TemplateContainer>
    </TagWrapper>
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
  query AuthorPage($author: String!) {
    authPosts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          author_group: { elemMatch: { author: { document: { elemMatch: { data: { name: { eq: $author } } } } } } }
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
