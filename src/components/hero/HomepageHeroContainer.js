import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './HomepageHero.css'
import BackgroundImage from 'gatsby-background-image'
import HeroTitle from './HomepageHeroTitle'

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
    }
  `)
  const imageData = data.homepage.data.body.map(s => s.primary.image.localFile.childImageSharp.fluid)
  return (
    <BackgroundImage Tag="section" className="bg" fluid={imageData} backgroundColor="#040e18">
      <HeroTitle />
    </BackgroundImage>
  )
}

export default HomepageHeroContainer
