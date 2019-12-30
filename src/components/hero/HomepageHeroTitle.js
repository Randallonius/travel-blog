import React, { useState, useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Title = styled.div`
  position: absolute;
  left: 0;
  top: 30%;
  text-align: center;
  color: #000;
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    top: 30%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    top: 15%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    top: 10%;
  }

  .gatsby-image-wrapper {
    width: 30vw;
    margin: 0 auto;
  }

  span {
    color: #fff;
    padding: 1.2rem;
    font-size: 2rem;
    letter-spacing: 0.8rem;
    display: block;
    text-align: center;
  }
`

const HeroTitle = () => {
  const [boxBackground, setboxBackground] = useState(false)
  const navRef = useRef()
  navRef.current = boxBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 120
      if (navRef.current !== show) {
        setboxBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query heroTitleQuery {
      homepage: prismicHomepage {
        data {
          title {
            text
          }
          content {
            html
          }
          body {
            ... on PrismicHomepageBodyTitleImage {
              slice_type
              id
              primary {
                image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
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

  const TitleImage = data.homepage.data.body.map(s =>
    s.slice_type && s.slice_type === 'title_image' ? (
      <Img key={s.id} fluid={s.primary.image.localFile.childImageSharp.fluid} />
    ) : null
  )

  const style = {
    opacity: boxBackground ? 0 : 1,
    transition: '.5s ease',
  }
  return <Title style={style}>{TitleImage}</Title>
}

export default HeroTitle
