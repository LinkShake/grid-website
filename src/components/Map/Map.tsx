"use client";

import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map({ coords }: { coords: number[] }) {
  const position = [...coords];
  const zoom = 13;

  return (
    <MapContainer center={position as any} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position as any}>
        <Popup>This is you</Popup>
      </Marker>
    </MapContainer>
  );
}
