import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import LeafletMap from './Map'

const Container = styled.div`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  .leaflet-container {
    width: 90%;
    height: 200px;
    margin: 20px auto;

    @media only screen and (min-width: 400px) {
      height: 300px;
    }
  }
  .leaflet-control-attribution a {
    font-size: 12px;
  }
`

const MapContainer = ({ open }) => {
  const data = useStaticQuery(graphql`
    query MapData {
      allPrismicGeo(sort: { order: ASC, fields: id }) {
        edges {
          node {
            data {
              coordinate_marker {
                text
              }
              coordinate_title {
                text
              }
              coordinates {
                latitude
                longitude
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Container open={open}>{typeof window !== 'undefined' && <LeafletMap mapData={data.allPrismicGeo} />}</Container>
  )
}

MapContainer.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default MapContainer
