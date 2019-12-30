import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Disqus from 'gatsby-plugin-disqus'
import styled from '@emotion/styled'
import kebabCase from 'lodash/kebabCase'
import { Aside, Layout, SEO, SliceZone, SubTitle, TagLink } from '../components'
import website from '../../config/website'
import { HeroImage } from '../components/hero'
import PostListCategories from '../components/postList/PostListCategories'
import { TemplateContainer, TemplateContent, Wrapper } from './TemplateStyle'

const PostWrapper = Wrapper.withComponent('main')

const PostWrapperMainContent = styled.div`
  padding: 0 2rem 2rem 2rem;
  background-color: ${props => props.theme.colors.white};

  p {
    font-size: 1em;
  }
`

const Headline = styled.div`
  color: ${props => props.theme.colors.grey};
  padding-top: 1.45rem;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    text-align: left;
  }

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    font-size: 1.25rem;
  }

  a {
    font-style: normal;
    font-weight: normal;
  }

  span,
  a {
    margin-right: 5px;
  }

  .info {
    display: block;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      display: inline-block;
    }
  }

  .divider {
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
    }
  }
`

const PostTags = styled.section`
  display: flex;
  align-items: center;
  margin-top: 1.944rem;
  margin-bottom: 1.944rem;
  a {
    margin-bottom: 0;
  }
  h5 {
    margin: 0;
    padding-right: 0.375em;
  }
`

const Post = ({ data: { prismicPost }, location }) => {
  const { data } = prismicPost
  let categories = false
  let author = false
  let tags = false
  if (data.categories[0].category) {
    categories = data.categories.map(c => c.category.document[0].data.name)
  }
  if (data.author_group[0].author) {
    author = data.author_group.map(a => a.author.document[0].data.name)
  }
  if (data.tags[0].tag) {
    tags = data.tags.map(t => t.tag.document[0].data.name)
  }
  const disqusConfig = {
    url: `${website.url}${location.pathname}`,
    identifier: prismicPost.uid,
    title: data.title.text,
  }

  return (
    <Layout customSEO>
      <SEO
        title={`${data.title.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicPost}
        article
      />
      <PostWrapper>
        <TemplateContainer>
          <TemplateContent>
            <HeroImage data={data.body} />
            <PostWrapperMainContent>
              <Headline>
                <span className="info">{data.date}</span> {categories && <span className="divider">/</span>}{' '}
                {categories && <PostListCategories categories={categories} />} <span className="divider">/</span>
                <span className="info">
                  By <Link to={`/authors/${kebabCase(author)}`}>{author}</Link>
                </span>
              </Headline>
              <SubTitle>{data.title.text}</SubTitle>
              <SliceZone allSlices={data.body} />
            </PostWrapperMainContent>
            {tags && (
              <PostTags>
                <h5>Tags:</h5> <TagLink tags={tags} />
              </PostTags>
            )}
            <Disqus config={disqusConfig} />
          </TemplateContent>
          <Aside />
        </TemplateContainer>
      </PostWrapper>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        date(formatString: "MMMM DD, YYYY")
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
                html
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPostBodyHeroImage {
            slice_type
            id
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
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
`
