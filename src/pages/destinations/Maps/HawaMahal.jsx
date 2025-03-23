import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const hawaMahalCoordinates = { lat: 26.9221, lng: 75.8267 };

const hawaMahalInfo = {
  name: "Hawa Mahal",
  description: "Hawa Mahal is a palace in Jaipur, India, known for its unique honeycomb-like structure. It was built in 1799 by Maharaja Sawai Pratap Singh for the royal ladies to observe street festivals without being seen.",
  history: "The structure was designed by Lal Chand Usta, and its intricate lattice of windows (called jharokhas) allowed the royal women to observe the bustling life of the city from a secluded spot. It is a fine example of Rajputana architecture.",
  significance: "Hawa Mahal is one of Jaipur's most famous landmarks and a symbol of the city's rich cultural heritage, attracting tourists worldwide."
};

function HawaMahal() {
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
    <div className="HawaMahal" style={{ position: 'relative', height: '100vh' }}>
      <h1 style={{
        position: 'absolute', top: '20px', left: '20px', zIndex: 1, 
        color: 'white', fontSize: '2.5rem', fontFamily: 'Georgia, serif',
        fontWeight: 'bold', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)'
      }}>
        {hawaMahalInfo.name}
      </h1>

      <LoadScript googleMapsApiKey={"AIzaSyCNbzuyWI66pUdNHgAST13c7BW4Eg0n4Yc"}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={hawaMahalCoordinates}
          zoom={zoom}
          options={{
            styles: [{ "elementType": "geometry", "stylers": [{ "color": "#212121" }] }]
          }}
        >
          <Marker position={hawaMahalCoordinates} />
        </GoogleMap>
      </LoadScript>

      <div style={{
        position: 'absolute', bottom: '30px', left: '20px',
        zIndex: 1, background: '#f9c74f', color: 'black', padding: '15px', borderRadius: '10px', width: '70%',
        maxWidth: '400px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', fontFamily: 'Arial, sans-serif'
      }}>
        <h2>{hawaMahalInfo.name}</h2>
        <p>{hawaMahalInfo.description}</p>
        <h3>History</h3>
        <p>{hawaMahalInfo.history}</p>
        <h3>Significance</h3>
        <p>{hawaMahalInfo.significance}</p>
      </div>
    </div>
  );
}

export default HawaMahal;
