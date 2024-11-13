import './mapa.css'
import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '90%',
    height: '400px',
  };
  const marker = {
    position: { lat: -34.638881, lng: -58.564156 },
    title: 'My Marker',
    clickable: true,
  };
  
  const center = {
    lat:-34.638881,
    lng: -58.564156
  };

;
  function Mapa() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyBXeiEzjuRMpUdATRoEQ-K0DVetxr9E_os"
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    


    return isLoaded ? (
        <div className='mapaContainer'>
            <div>
                <h2>Donde estamos</h2>
            </div>
            <div className='mapa'>
                    <GoogleMap 
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    >
                    <Marker {...marker}/>
                    { /* Child components, such as markers, info windows, etc. */ }
                    <>
                    </>
                    </GoogleMap>
            </div>
        </div>
        ) : <></>
    
  }
  
  export default React.memo(Mapa)