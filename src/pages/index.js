import React, { Component } from "react"
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import HeroImageContainer from "../components/heroImageContainer"

class IndexPage extends Component {
  render() {
    const {
      data: { homepage }
    } = this.props
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <h1>{homepage.data.title.text}</h1>
        <span dangerouslySetInnerHTML={{ __html: homepage.data.content.html }}></span>
        <div>
          <HeroImageContainer data={homepage.data.body}/>
        </div>
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
