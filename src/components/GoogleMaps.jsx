import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 13.7563,
  lng: 100.5018,
};

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="flex justify-center items-center w-full h-screen p-4">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          mapTypeId="hybrid" // Use hybrid for satellite view with labels
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default GoogleMaps;






//To set up limitation to the website later once the domain is moved to gbacsports.com
//https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=keyless#api-key-and-billing-errors
