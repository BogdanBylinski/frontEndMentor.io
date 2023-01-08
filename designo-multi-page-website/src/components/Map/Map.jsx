import "./_Map.scss";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map({ location }) {
  const locations = {
    canada: { lat: 44, lng: -80 },
    australia: { lat: -30.3293985, lng: 149.7860512 },
    uk: { lat: 51.72840909119928, lng: -3.860572253366434 },
  };
  const center = useMemo(() => locations[location], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  console.log(process.env.GOOGLE_API_KEY);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map">
      <Marker position={center} />
    </GoogleMap>
  );
}
