import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
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
          body {
            ... on PrismicHomepageBodyHeroImage {
              slice_type
              id
              primary {
                image {
                  alt
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1600, quality: 100) {
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
    }
  `)
  const imageData = data.homepage.data.body.map(s =>
    s.slice_type && s.slice_type === 'hero_image' ? (
      <div>
        <Img key={s.id} fluid={s.primary.image.localFile.childImageSharp.fluid} />
        <HeroTitle />
      </div>
    ) : null
  )
  return <HeroContainer>{imageData}</HeroContainer>
}

export default HomepageHeroContainer
