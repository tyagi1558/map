import React from "react";
import "../css/sidebar.css";
import { Menu, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import RegionForm from "./RegionForm";

function Sidebar() {
  const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.selectedRegion);
  const nightMode = useSelector((state) => state.nightMode);

  const handleSelectRegion = ({ key }) => {
    dispatch({ type: "SET_SELECTED_REGION", payload: key });
  };

  const handleNightModeChange = (checked) => {
    dispatch({ type: "SET_NIGHT_MODE", payload: checked });
  };

  return (
    <aside>
      <RegionForm />
      <div className="night-mode">
        <Switch checked={nightMode} onChange={handleNightModeChange} />
        <span>Night Mode</span>
      </div>
    </aside>
  );
}

export default Sidebar;
