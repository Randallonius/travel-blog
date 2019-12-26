import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import './HomepageHero.css'
import BackgroundImage from 'gatsby-background-image'
import HeroTitle from './HomepageHeroTitle'

const HeroContainer = styled.div`
  width: 100%;
  background-color: white;
`

const HomepageHeroContainer = () => {
  const data = useStaticQuery(graphql`
    query heroQuery {
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
                      fluid(maxWidth: 1600, quality: 100) {
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
  `)
  const imageData = data.homepage.data.body.map(
    s => s.slice_type === 'hero_image' && s.primary.image.localFile.childImageSharp.fluid
  )
  return (
    <HeroContainer>
      <BackgroundImage Tag="section" className="bg" fluid={imageData}>
        <HeroTitle />
      </BackgroundImage>
    </HeroContainer>
  )
}

export default HomepageHeroContainer
