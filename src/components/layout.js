import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'

import Header from "./header"
import "./layout.css"
import { theme, reset } from '../styles'
import 'typeface-poppins'

const globalStyle = css`
  ${reset}
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.primary};
    font-family: poppins;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.bg};
    font-family: poppins;
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  a {
    color: ${theme.colors.greyDark};
    transition: all 0.25s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    &:hover,
    &:focus {
      color: ${theme.colors.greyHover};
      text-decoration: none;
    }
  }
  p {
    font-size: 1em;
    line-height: 1.5em;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <Global styles={globalStyle} />
        <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <aside>This is the aside</aside>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
