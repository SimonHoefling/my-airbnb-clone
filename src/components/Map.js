import { useState } from 'react';
import * as React from 'react';
import Map from 'react-map-gl';

function Mapbox() {

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: 0.118092,
    latitude: 51.509865,
    zoom: 9
  })

  return (
    <div>
      <Map
        mapStyle='mapbox://styles/mapsimon/clgbnis8j003r01n22l405lgg'
        mapboxAccessToken={process.env.mapbox_key}
        style={{width: 600, height: "100%"}}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ></Map>
    </div>
  )
}

export default Mapbox;
