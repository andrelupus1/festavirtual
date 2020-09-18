import { Component } from "react";
// @material-ui/icons
import Room from "@material-ui/icons/Room";
// @mapbox
import MapGL, { Marker } from "react-map-gl";

import Pin from './pin';
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW5kcmVsdXB1czEiLCJhIjoiY2tmNzR1dzJqMGJvczMzbGJ1cGZwODEzdiJ9.u29ovuI-mcILNfEB970FAA"; // Set your mapbox token here
const LAT = 41.5868;
const LNG = -93.625;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: LAT,
        longitude: LNG,
        zoom: 16,
        bearing: 0,
        pitch: 0,
      },
    };
  }
  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width= "100vw"
        height= "100vh"
        mapStyle="mapbox://sprites/mapbox/streets-v8"
        // mapStyle="mapbox://sprites/mapbox/bright-v8"
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={LNG} latitude={LAT} offsetTop={-10} offsetLeft={-5}>
            <Pin size={20} />
        </Marker>
      </MapGL>
    );
  }
}

export default Map;
