import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LeafletMap from './Map'

const MapContainer = () => {
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
  return <div>{typeof window !== 'undefined' && <LeafletMap mapData={data.allPrismicGeo} />}</div>
}

export default MapContainer
