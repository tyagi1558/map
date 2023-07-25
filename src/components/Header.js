import React, { useState } from "react";
import "../css/header.css";
import menuImage from "../images/menu.png";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";

function Header() {
  const dispatch = useDispatch();

  var [menuBtnClick, setMenuBtnClick] = useState(0);
  const handleLogin = () => {
    // handle login logic
  };

  const handleLogout = () => {
    // handle logout logic
  };

  const handleProfile = () => {
    // handle profile logic
  };

  return (
    <header>
      <div className="main">
        <div className="logo">Map App</div>
        <div className="buttons">
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={handleLogout}>Logout</Button>
          <Button onClick={handleProfile}>Profile</Button>
          <div className="menu-btn">
            <img
              onClick={() => setMenuBtnClick(!menuBtnClick)}
              src={menuImage}
              alt="menu"
            />
          </div>
        </div>
      </div>
      {menuBtnClick ? <Sidebar className="sidebarr" /> : <div></div>}
    </header>
  );
}

export default Header;
