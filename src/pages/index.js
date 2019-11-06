import React, { Component } from "react"
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import HeroImageContainer from '../components/hero/heroImageContainer'
import HeroTextContainer from '../components/hero/heroTextContainer'

class IndexPage extends Component {
  render() {
    const {
      data: { homepage }
    } = this.props
    return (
      <Layout>
        <SEO title="Home" />
        <HeroImageContainer data={homepage.data}/>
        <HeroTextContainer data={homepage.data}/>
      </Layout>     
    )
  }
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.object.isRequired
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
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
                    fluid(maxWidth: 1300, quality: 90) {
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
`
