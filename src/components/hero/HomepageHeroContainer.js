import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import './HomepageHero.css'

import BackgroundImage from 'gatsby-background-image'

// eslint-disable-next-line react/prop-types
const HomepageHeroContainer = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.homepage.data.body.map(s => s.primary.image.localFile.childImageSharp.fluid)
      return (
        <BackgroundImage Tag="section" className="bg" fluid={imageData} backgroundColor="#040e18">
          <div>
            <span>Travel Blog</span>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default HomepageHeroContainer
