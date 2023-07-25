import React from "react";
import { useSelector } from "react-redux";

function RegionInfo() {
  const regionInfo = useSelector((state) => state.regionInfo);

  if (!regionInfo) {
    return null;
  }

  return (
    <div className="region-info">
      <div className="currency">Currency: {regionInfo.currency}</div>
      <div className="speed-units">Speed Units: {regionInfo.speedUnits}</div>
      <div className="distance-units">
        Distance Units: {regionInfo.distanceUnits}
      </div>
      <div className="volume-units">Volume Units: {regionInfo.volumeUnits}</div>
      <div className="timezone">
        Timezone(s): {regionInfo.timezones.join(", ")}
      </div>
    </div>
  );
}

export default RegionInfo;
