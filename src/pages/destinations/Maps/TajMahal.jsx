import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

const containerStyle = {
  width: '100%',
  height: '100vh', // Full viewport height
};

const tajMahalCoordinates = { lat: 27.1751, lng: 78.0421 };

const tajMahalInfo = {
  name: "Taj Mahal",
  description: "The Taj Mahal is a white marble mausoleum located in Agra, India. It was commissioned by Emperor Shah Jahan in 1632 to house the tomb of his beloved wife Mumtaz Mahal. It is considered one of the most beautiful and iconic buildings in the world and is recognized as a UNESCO World Heritage Site.",
  history: "Construction of the Taj Mahal began in 1632, and the main mausoleum was completed in 1643. The complex was finished in 1653. Built using white marble, it is an example of Mughal architecture and is considered a symbol of love and India's rich cultural history.",
  significance: "The Taj Mahal is widely regarded as the finest example of Mughal architecture, a blend of Persian, Ottoman Turkish, and Indian styles. The monument attracts millions of visitors each year and is one of the Seven Wonders of the World."
};

function TajMahal() {
  const [zoom, setZoom] = useState(3); // Initial zoom level
  const mapRef = useRef(null); // Reference to the map

  useEffect(() => {
    let zoomLevel = 3;
    const interval = setInterval(() => {
      if (zoomLevel < 18) {  // Target zoom level
        zoomLevel++;
        setZoom(zoomLevel); // Increment zoom
      } else {
        clearInterval(interval); // Stop zooming when the target level is reached
      }
    }, 50); // Adjust the speed of zoom (lower value is faster)
    
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="TajMahal" style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{
        position: 'absolute', top: '20px', left: '20px', zIndex: 1, 
        color: 'white', fontSize: '2.5rem', fontFamily: 'Georgia, serif',
        fontWeight: 'bold', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)'
      }}>
        {tajMahalInfo.name}
      </h1>

      <LoadScript googleMapsApiKey={"AIzaSyCNbzuyWI66pUdNHgAST13c7BW4Eg0n4Yc"}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={tajMahalCoordinates}
          zoom={zoom}  // Set dynamic zoom
          options={{
            styles: [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#212121"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#212121"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#181818"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#2c2c2c"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#8a8a8a"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#373737"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#3c3c3c"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#7c7c7c"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#2f2f2f"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#8a8a8a"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#000000"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#3d3d3d"
                  }
                ]
              }
            ]
          }}
        >
          <Marker position={tajMahalCoordinates} />
        </GoogleMap>
      </LoadScript>

      <div style={{
        position: 'absolute', bottom: '30px', left: '20px', 
        zIndex: 1, background: '#f9c74f', // Yellowish-gold background
        color: 'black', padding: '15px', borderRadius: '10px', width: '70%', maxWidth: '400px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>{tajMahalInfo.name}</h2>
        <p style={{ fontSize: '1rem', marginBottom: '10px' }}>{tajMahalInfo.description}</p>
        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '5px' }}>History</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>{tajMahalInfo.history}</p>
        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '5px' }}>Significance</h3>
        <p style={{ fontSize: '0.9rem' }}>{tajMahalInfo.significance}</p>
      </div>
    </div>
  );
}

export default TajMahal;
