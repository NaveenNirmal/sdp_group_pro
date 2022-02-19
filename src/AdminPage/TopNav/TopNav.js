import React,{useState} from "react";
import "./TopNav.css";
import Logo from '../../images/SDPLogo.png';

function TopNav() {

  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <img src={Logo} className="topbar__Logo" alt="logo" width="200" />
          </div>
          <div className="topRight">
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
