import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const amberFortCoordinates = { lat: 26.9870, lng: 75.8513 };

const amberFortInfo = {
  name: "Amber Fort",
  description: "Amber Fort is a majestic hilltop fort located in Jaipur, India. Built in the 16th century by Raja Man Singh I, it is known for its artistic Hindu style elements and its massive walls and gates.",
  history: "Amber Fort was the residence of the Rajput Maharajas and their families. It features a blend of Hindu and Mughal architecture, with intricate carvings, large courtyards, and elaborate gates.",
  significance: "It is one of the most famous tourist attractions in Jaipur and a UNESCO World Heritage Site. The fort offers a stunning view of the surrounding area, including the Maota Lake."
};

function AmberFort() {
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
    <div className="AmberFort" style={{ position: 'relative', height: '100vh' }}>
      <h1 style={{
        position: 'absolute', top: '20px', left: '20px', zIndex: 1, 
        color: 'white', fontSize: '2.5rem', fontFamily: 'Georgia, serif',
        fontWeight: 'bold', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)'
      }}>
        {amberFortInfo.name}
      </h1>

      <LoadScript googleMapsApiKey={"AIzaSyCNbzuyWI66pUdNHgAST13c7BW4Eg0n4Yc"}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={amberFortCoordinates}
          zoom={zoom}
          options={{
            styles: [{ "elementType": "geometry", "stylers": [{ "color": "#212121" }] }]
          }}
        >
          <Marker position={amberFortCoordinates} />
        </GoogleMap>
      </LoadScript>

      <div style={{
        position: 'absolute', bottom: '30px', left: '20px',
        zIndex: 1, background: '#f9c74f', color: 'black', padding: '15px', borderRadius: '10px', width: '70%',
        maxWidth: '400px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', fontFamily: 'Arial, sans-serif'
      }}>
        <h2>{amberFortInfo.name}</h2>
        <p>{amberFortInfo.description}</p>
        <h3>History</h3>
        <p>{amberFortInfo.history}</p>
        <h3>Significance</h3>
        <p>{amberFortInfo.significance}</p>
      </div>
    </div>
  );
}

export default AmberFort;
