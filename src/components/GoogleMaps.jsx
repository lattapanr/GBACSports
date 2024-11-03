import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import mapIcon from "/src/assets/images/mapIcon.svg"; // Ensure this path is correct
import { div } from "framer-motion/client";

const places = [
  {
    id: 1,
    lat: 13.7606285,
    lng: 100.5018,
    label: "Amnuay Silpa School",
    direction:
      "https://www.google.com/maps/dir/?api=1&destination=304/1%20Thanon%20Si%20Ayutthaya,%20Khwaeng%20Thung%20Phaya%20Thai,%20Khet%20Ratchathewi,%20Krung%20Thep%20Maha%20Nakhon%2010400,%20Thailand",
  },
  {
    id: 2,
    lat: 13.7013511,
    lng: 100.5363208,
    label: "Aster Internation School",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/24+Naradhiwas+Rajanagarindra+Rd,+Khwaeng+Chong+Nonsi,+Khet+Yan+Nawa,+Krung+Thep+Maha+Nakhon+10120/@13.7101631,100.5207051,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x30e29f4f758b1035:0x68ecbff56aad8ae4!2m2!1d100.539665!2d13.7027224?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 3,
    lat: 13.75434,
    lng: 100.6717698,
    label: "Brighton College",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/8+Brighton+College+Bangkok,+%E0%B8%8B%E0%B8%AD%E0%B8%A2+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%91%E0%B8%B2+15+Hua+Mak,+Bang+Kapi+District,+Bangkok/@13.7316285,100.5827903,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x311d617318c4e3bb:0x91693ae533dadf!2m2!1d100.6717698!2d13.75434?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 4,
    lat: 13.715204,
    lng: 100.545965,
    label: "Garden International School",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/Garden+International+School+Bangkok,+2,+Akart+Yen+Akat+Rd,+Thung+Maha+Mek,+Sathon,+Bangkok+10120/@13.7183866,100.5413609,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x30e298abfffc48f5:0x6f2d5c478a4cfee9!2m2!1d100.545965!2d13.715204?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 5,
    lat: 13.7701572,
    lng: 100.6014228,
    label: "Lycée Français International",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/Lyc%C3%A9e+Fran%C3%A7ais+International+de+Bangkok,+498,+soi+Ramkhamhaeng+39,+Rotchanamin+Alley,+Wang+Thonglang,+Bangkok+10310/@13.741593,100.5685098,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x30e29feb28eba037:0x2a6ff9c1f5b993cf!2m2!1d100.6014228!2d13.7701572?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 6,
    lat: 13.7419835,
    lng: 100.5611878,
    label: "Prasarnmit Primary International Programme",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/174+Soi+Sukhumvit+23,+Khwaeng+Khlong+Toei+Nuea,+Watthana,+Krung+Thep+Maha+Nakhon+10110/@13.7306161,100.5605335,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x30e29efb1ce36b89:0x3885e8b07a339236!2m2!1d100.5653459!2d13.7415073?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 7,
    lat: 13.7431848,
    lng: 100.5655237,
    label: "Satit Prasarnmit International Programme",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/Satit+Prasarnmit+International+Programme,+Vit+Virod+Building,+176+Soi+Sukhumvit+23,+Khlong+Toei+Nuea,+Watthana,+Bangkok+10110/@13.7305463,100.5612948,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x30e29efb6e4688cb:0x9b4690d95bf73d15!2m2!1d100.565569!2d13.7429575?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 8,
    lat: 13.7704447,
    lng: 100.6026044,
    label: "Singapore International School of Bangkok",
    direction:
      "https://www.google.com/maps/dir/?api=1&destination=498,%2011%20Soi%20Rotchanamin,%20Khwaeng%20Wang%20Thonglang,%20Khet%20Wang%20Thonglang,%20Krung%20Thep%20Maha%20Nakhon%2010310,%20Thailand",
  },
  {
    id: 9,
    lat: 13.6590406,
    lng: 100.599043,
    label: "St Andrews International School, Sukhumvit 107",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/7+Sukhumvit+107,+Khwaeng+Bang+Na,+Khet+Bang+Na,+Krung+Thep+Maha+Nakhon+10260/@13.6887056,100.5458859,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x30e2a06b9422a18b:0x5f0a915d7b47d48!2m2!1d100.6016164!2d13.6590739?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 10,
    lat: 13.6602531,
    lng: 100.5941651,
    label: "TSI International School (Bearing Campus)",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/TSI+International+School+(Bearing+Campus),+Thang+Rotfai+Sai+Kao+Pak+Nam+Road,+Samrong+Nuea,+Samut+Prakan/@13.6866983,100.5458859,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x30e2a041b1d85ce3:0xe2df94ec73f9781c!2m2!1d100.5941651!2d13.6602531?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 11,
    lat: 13.7440145,
    lng: 100.6716032,
    label: "Wellington College International School",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/18%2F5+Krungthep+Kreetha+Rd,+Thap+Chang,+Khet+Saphan+Sung,+Krung+Thep+Maha+Nakhon+10250/@13.7321044,100.5435873,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x311d610bd5e0f90b:0xd9df781c9b9c0eb!2m2!1d100.6678636!2d13.7459587?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 12,
    lat: 13.633318,
    lng: 100.7326451,
    label: "VERSO International School",
    direction:
      "https://www.google.com/maps/dir/13.7173676,100.5762858/Thanon+Suvarnabhumi+3,+Tambon+Bang+Chalong,+Amphoe+Bang+Phli,+Chang+Wat+Samut+Prakan+10540/@13.6708142,100.4963856,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x311d6785b2a4b9e3:0xa5106036887d8914!2m2!1d100.7584305!2d13.6675995?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 13.7563,
  lng: 100.5018,
};

const GoogleMaps = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    if (isLoaded && map) {
      // Clear any existing markers to avoid duplicates
      map.markers = map.markers || [];
      map.markers.forEach((marker) => marker.setMap(null));
      map.markers = [];

      // Create a new info window (only one to reuse across markers)
      const newInfoWindow = new window.google.maps.InfoWindow();
      setInfoWindow(newInfoWindow);

      // Add markers with custom icons and info window
      places.forEach((place) => {
        const marker = new window.google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          map,
          title: place.label,
          icon: {
            url: mapIcon,
            scaledSize: new window.google.maps.Size(32, 32), // Adjust size as needed
          },
        });

        // Add click listener to show info window
        marker.addListener("click", () => {
          newInfoWindow.setContent(
            `<div>
              <h4>${place.label}</h4>
              <a href="${place.direction}" target="_blank" style="color: blue; text-decoration: underline;">Get Directions</a>
            </div>`
          );
          newInfoWindow.open(map, marker);
        });

        // Store marker in map's marker array
        map.markers.push(marker);
      });
    }
  }, [isLoaded, map]);

  if (loadError) {
    return <div>Error loading Google Maps. Please check your API key.</div>;
  }

  return isLoaded ? (
    <div className="w-full mb-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={(map) => setMap(map)}
        mapTypeId="hybrid"
      >
        {/* Markers and info window are added via useEffect */}
      </GoogleMap>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default GoogleMaps;
