import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'

const LogoContainer = styled.div`
  height: 3.125em;
  width: 3.125em;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    height: 6.25em;
    width: 6.25em;
  }
`

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query HeaderLogoQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 125, maxHeight: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoContainer>
      <Link to="/">
        <Img fluid={data.file.childImageSharp.fluid} />
      </Link>
    </LogoContainer>
  )
}

export default HeaderLogo
