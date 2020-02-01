import React, { useState, useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Title = styled.div`
  position: absolute;
  left: 0;
  top: 10%;
  text-align: center;
  color: #000;
  width: 100%;

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
      const show = window.scrollY > 300
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

  const TitleImage = data.homepage.data.body.map(s =>
    s.slice_type && s.slice_type === 'title_image' ? (
      <Img key={s.id} fluid={s.primary.image.localFile.childImageSharp.fluid} />
    ) : null
  )

  const style = {
    opacity: boxBackground ? 0 : 1,
    transition: '1s ease',
  }
  return (
    <Title style={style}>
      <Parallax y={[0, 35]}>{TitleImage}</Parallax>
    </Title>
  )
}

export default HeroTitle
