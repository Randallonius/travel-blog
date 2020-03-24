import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { HeroImageContainer } from '../components/hero'
import { Layout, SEO, Title } from '../components'

const AboutPageWrapper = styled.div`
  width: 100%;
  margin: 70px auto;
  width: 90%;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: 80%;
  }
`

const HeroInnerImage = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  div {
    padding: 0;
  }
`

const AboutContent = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  padding-top: 20px;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    padding-top: 40px;
  }
`

const AuthorContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 2rem;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    grid-template-columns: 1fr 1fr;
  }
`

const AuthorBlock = styled.div`
  position: relative;
  border: 1px solid black;
`

const AuthorName = styled.span`
  position: absolute;
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.accentBlue};
  top: -20px;
  left: 20px;
  font-size: 1.5em;
  padding: 0 0.3em;
`

const AuthorInfoBlock = styled.div`
  padding: 1.2em;
`

const AuthorInfoTitle = styled.div`
  h3 {
    color: ${props => props.theme.colors.accentBlue};
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`

class AboutPage extends Component {
  render() {
    const {
      data: { aboutpage, authors },
    } = this.props

    const author = authors.edges.map(a => (
      <AuthorContainer>
        <div>
          <Img fluid={a.node.data.image.localFile.childImageSharp.fluid} />
        </div>
        <AuthorBlock>
          <AuthorName>{a.node.data.name}</AuthorName>
          <AuthorInfoBlock>
            <AuthorInfoTitle>
              <h3>Role:</h3> {a.node.data.title}
            </AuthorInfoTitle>
            <AuthorInfoTitle>
              <h3>My Interests:</h3> {a.node.data.interests}
            </AuthorInfoTitle>
            <AuthorInfoTitle>
              <h3>Number of passport stamps:</h3> {a.node.data.stamps}
            </AuthorInfoTitle>
            <AuthorInfoTitle>
              <h3>Favorite Country:</h3> {a.node.data.favorite_country}
            </AuthorInfoTitle>
          </AuthorInfoBlock>
        </AuthorBlock>
      </AuthorContainer>
    ))
    return (
      <Layout>
        <SEO title="About" />
        <AboutPageWrapper>
          <Title>{aboutpage.data.about_title.text}</Title>
          <AboutContent>{aboutpage.data.about_content.text}</AboutContent>
          <HeroInnerImage>
            <HeroImageContainer data={aboutpage.data} />
          </HeroInnerImage>
          <div>{author}</div>
        </AboutPageWrapper>
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    aboutpage: PropTypes.object.isRequired,
    authors: PropTypes.object.isRequired,
  }).isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    aboutpage: prismicAboutpage {
      data {
        about_title {
          text
        }
        about_content {
          text
        }
        body {
          ... on PrismicAboutpageBodyHeroImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    authors: allPrismicAuthor {
      edges {
        node {
          data {
            name
            interests
            stamps
            favorite_country
            title
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
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
