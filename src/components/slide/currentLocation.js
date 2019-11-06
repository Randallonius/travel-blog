import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SubTitle from '../subTitle'

const CurrentLocation = () => {
  const data = useStaticQuery(graphql`
    query locationQuery {
      prismicHomepage {
        data {
          geolocation {
            text
          }
        }
      }
    }
  `)

  return (
    <>
      <SubTitle>{data.prismicHomepage.data.geolocation.text}</SubTitle>
    </>
  )
}

export default CurrentLocation
