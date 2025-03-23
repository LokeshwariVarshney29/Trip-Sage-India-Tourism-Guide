import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const wtpCoordinates = { lat: 26.8554, lng: 75.8017 };

const wtpInfo = {
  name: "World Trade Park (WTP)",
  description: "World Trade Park is a multi-use commercial complex in Jaipur, India, known for its modern architecture and state-of-the-art amenities. It houses a range of retail outlets, offices, and entertainment options.",
  history: "WTP is one of the largest malls in Jaipur and a significant part of the city's growing business and tourism sector. The building is designed to resemble two large wings and has earned praise for its innovative design.",
  significance: "World Trade Park has become a landmark in Jaipur, contributing to the city's development as a modern commercial hub while still preserving its traditional culture."
};

function WTP() {
  const [zoom, setZoom] = useState(3);

  useEffect(() => {
    let zoomLevel = 3;
    const interval = setInterval(() => {
      if (zoomLevel < 18) {
        zoomLevel++;
        setZoom(zoomLevel);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="WTP" style={{ position: 'relative', height: '100vh' }}>
      <h1 style={{
        position: 'absolute', top: '20px', left: '20px', zIndex: 1, 
        color: 'white', fontSize: '2.5rem', fontFamily: 'Georgia, serif',
        fontWeight: 'bold', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)'
      }}>
        {wtpInfo.name}
      </h1>

      <LoadScript googleMapsApiKey={"AIzaSyCNbzuyWI66pUdNHgAST13c7BW4Eg0n4Yc"}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={wtpCoordinates}
          zoom={zoom}
          options={{
            styles: [{ "elementType": "geometry", "stylers": [{ "color": "#212121" }] }]
          }}
        >
          <Marker position={wtpCoordinates} />
        </GoogleMap>
      </LoadScript>

      <div style={{
        position: 'absolute', bottom: '30px', left: '20px',
        zIndex: 1, background: '#f9c74f', color: 'black', padding: '15px', borderRadius: '10px', width: '70%',
        maxWidth: '400px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', fontFamily: 'Arial, sans-serif'
      }}>
        <h2>{wtpInfo.name}</h2>
        <p>{wtpInfo.description}</p>
        <h3>History</h3>
        <p>{wtpInfo.history}</p>
        <h3>Significance</h3>
        <p>{wtpInfo.significance}</p>
      </div>
    </div>
  );
}

export default WTP;
