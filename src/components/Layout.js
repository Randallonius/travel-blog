import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import Headroom from 'react-headroom'
import { Header } from './header'
import Footer from './Footer'
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
  #disqus_thread {
    border: 1px solid black;
    margin: 0;
    width: 100%;
    padding: 20px;
  }
  .body--slide-open {
    overflow: hidden;
    height: 100%;
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
        <Headroom>
          <Header siteTitle={data.site.siteMetadata.title} />
        </Headroom>
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

export default Layout
