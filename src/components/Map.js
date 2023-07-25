import React, { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  Map,
  TileLayer,
  GeoJSON,
  useMap,
  Marker,
  Popup,
  Rectangle
} from "react-leaflet";

const redColor = { color: "red" };
const whiteColor = { color: "red" };

const getBoundsForRegion = (region) => {
  switch (region) {
    case "us":
      return [
        [24.7433195, -124.7844079],
        [49.3457868, -66.9513812]
      ];
    case "in":
      return [
        [6.4626999, 68.1097],
        [35.6745458, 97.3955615]
      ];
    case "uk":
      return [
        [49.8039599, -10.8544922],
        [60.9511982, 2.5488281]
      ];
    default:
      return [
        [49.505, -2.09],
        [53.505, 2.09]
      ];
  }
};
const SetBoundsRectangles = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);
  const [bounds, setBounds] = useState(getBoundsForRegion(selectedRegion));
  const map = useMap();

  const innerHandlers = useMemo(
    () => ({
      click() {
        setBounds(getBoundsForRegion(selectedRegion));
        map.fitBounds(getBoundsForRegion(selectedRegion));
      }
    }),
    [map, selectedRegion]
  );

  return (
    <>
      <Rectangle
        bounds={getBoundsForRegion(selectedRegion)}
        eventHandlers={innerHandlers}
        pathOptions={
          bounds === getBoundsForRegion(selectedRegion) ? redColor : whiteColor
        }
      />
    </>
  );
};

const MapC = (props) => {
  const selectedRegion = useSelector((state) => state.selectedRegion);
  return (
    <MapContainer
      bounds={getBoundsForRegion(selectedRegion)}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=3LRFrHdlhB9aiXDVdONB"
      />
      <SetBoundsRectangles />
    </MapContainer>
  );
};

export default MapC;
