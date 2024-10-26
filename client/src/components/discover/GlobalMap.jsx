import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css"

const GlobalMap = () => {
    return (
        <MapContainer center={[-33.918861, 18.4233]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default GlobalMap;
