import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'

type Position = [number, number]

type Props = {|
  content: string,
  position: Position,
|}

type MarkerData = {| ...Props, key: string |}

const MyPopupMarker = ({ content, position }: Props) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }: { markers: Array<MarkerData> }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const items = markers.map(({ key, ...props }) => <MyPopupMarker key={key} {...props} />)
  return <>{items}</>
}

type State = {
  markers: Array<MarkerData>,
}

class LeafletMap extends Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = {
      markers: {
        key: '',
        position: [],
        content: '',
      },
    }
    this.mapStore = this.mapStore.bind(this)
  }

  componentDidMount() {
    this.mapStore()
  }

  mapStore() {
    const { mapData } = this.props

    this.setState({
      markers: mapData.edges.map(m => ({
        key: m.node.data.coordinate_marker.text,
        position: [m.node.data.coordinates.latitude, m.node.data.coordinates.longitude],
        content: m.node.data.coordinate_title.text,
      })),
    })
  }

  render() {
    const { markers } = this.state
    return (
      <Map center={[51.505, -0.09]} zoom={1}>
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <MyMarkersList markers={markers} />
      </Map>
    )
  }
}

export default LeafletMap

LeafletMap.propTypes = {
  mapData: PropTypes.object.isRequired,
}
