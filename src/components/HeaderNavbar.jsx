import React from "react";
import { Link } from "react-router-dom";
import '../componentCSS/HeaderNavbar.css'
import { useState } from "react";
import { WEB_LOGO, PROFILE_LOGO } from "../dataControl/imageUrls";
import { FaBars } from 'react-icons/fa';
import NotificationIcon from "./notificationIcon";
import SideBarComponent from "./leftSideBar";
function HeaderNavbar(){
    const [profileDropdown, setProfileDropdown] = useState(false);
    const[isSideBar,SetIsSideBar]=useState(false)
    function toggleSideBar(){
      SetIsSideBar(!isSideBar)
    }
    return (
        <>
          <div className="side-bar-div">
          <FaBars className="sidebar-icon"
             onClick={toggleSideBar}
          />
          <h4>Blood Beacon</h4>
           <NotificationIcon/>
          </div>
          {
            isSideBar?<SideBarComponent/>:""  
          }
        <div className="navbar">
            <div className="navbar-logo">
              <img src={WEB_LOGO} alt="Profile Logo" />
            </div>
            <h3 className="web-name">Blood Beacon</h3>
           <div className="navbar-container">
           <div className="navbar-links">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/bloodbank/searchbloodbank"}>Near BloodBank</Link>
            </div>
            <div className="navbar-icons">
                <NotificationIcon/>
                <div className="profile-menu">
                    <img src="https://avatar.iran.liara.run/public/boy" 
                      onClick={() => setProfileDropdown(!profileDropdown)}
                    alt="Profile" className="profile-logo" />
                    {profileDropdown && (
                        <div className="profile-dropdown">
                            <Link to={"/profile"}>Profile</Link>
                            <Link to={"/login"}>Login</Link>
                            <Link to={"/signup"}>Signup</Link>
                        </div>
                    )}
                </div>
            </div>
           </div>
        </div>
        </>
    );
}
export default HeaderNavbar