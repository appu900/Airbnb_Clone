import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map,{FullscreenControl, Marker, NavigationControl} from "react-map-gl"
import { useState } from 'react'

const Maps = () => {
  const[lng,setlng] = useState(54.37585762735543);
  const[lat,setLat] = useState(24.45677614934833);
  return (
    <div className='overflow-hidden'>
      
      <Map
      mapboxAccessToken='pk.eyJ1IjoiMTdhcHB1IiwiYSI6ImNsZ3E4eWFhcDBuNTAzZm1tY3pvdWo4MnMifQ.HHNhvBk9_47ueK0ECAzRUA'
      style={{
        width:"99vw",
        height:"100vh",
        overflow:'hidden'

      }}
      initialViewState={{
        longitude:lng,
        latitude:lat,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
      <Marker
      longitude={lng}
      latitude={lat}

      />  
      <NavigationControl/>
      <FullscreenControl/>
      </Map>
    </div>
  )
}

export default Maps