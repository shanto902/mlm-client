import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
const MapComponent = () => {
  // Define a default position (e.g., a central location)
  const defaultPosition = { lat: 23.8103, lng: 90.4125 }; // Dhaka, Bangladesh
  const defaultPosition2 = { lat: 23.841041, lng: 90.426208 }; // Dhaka, Bangladesh
  const position = defaultPosition;

  const apiKey = import.meta.env.VITE_GOOGLE_API;
  const mapId = import.meta.env.VITE_GOOGLE_MAP_ID;

  return (
    <APIProvider apiKey={apiKey}>
      <Map defaultZoom={15} defaultCenter={position} mapId={mapId}>
        {location && (
          <AdvancedMarker position={position}>
            <Pin borderColor={"black"}></Pin>
          </AdvancedMarker>
        )}
        <AdvancedMarker position={defaultPosition2}>
          <Pin borderColor={"yellow"}></Pin>
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
