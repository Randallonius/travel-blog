import React, { Component, Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../../styles/map.css'

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
  const items = markers.map(({ key, ...props }) => <MyPopupMarker key={key} {...props} />)
  return <Fragment>{items}</Fragment>
}

type State = {
  markers: Array<MarkerData>,
}

class LeafletMap extends Component<{}, State> {
  static defaultProps = {
    markers: {
      key: "",
      position: [51, -1],
      content: "",
    }
  }
  constructor(props) {
    super(props)
    this.state = { 
      markers: {
        key: "",
        position: [],
        content: "",
      }
    }
    this.mapStore = this.mapStore.bind(this);
  }
  componentDidMount() {
    this.mapStore()
  }
  mapStore() {
    this.setState({
      markers: this.props.mapData.edges.map(m => ({
        key: m.node.data.coordinate_marker.text,
        position: [m.node.data.coordinates.latitude, m.node.data.coordinates.longitude],
        content: m.node.data.coordinate_title.text,
      }))
    })
  }
  render() {
    return (
      <Map center={[51.505, -0.09]} zoom={1}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <MyMarkersList markers={this.state.markers} />
      </Map>
    )
  }
}

export default LeafletMap
