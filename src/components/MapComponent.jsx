import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";

const Container = styled.div`
  width: 100px;
  height: 500px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const MapComponent = () => {
  const position = [51.505, -0.09];
  return(
    <Container>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100px", borderRadius: "10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Container>
  );
};

export default MapComponent;
