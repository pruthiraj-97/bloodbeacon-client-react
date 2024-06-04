'use client'
import React from "react";
import { Link } from "react-router-dom";
import '../componentCSS/sidebar.css'
import { WEB_LOGO } from "../dataControl/imageUrls";
import {FaUserPlus, FaHome, FaInfo, FaHeartbeat, FaUser, FaSignInAlt } from 'react-icons/fa';
function SideBarComponent(){
    return (
        <div className="container">
         <aside className="sidebar">
        <div className="logo">
          <img className="logo-image" src={WEB_LOGO} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <FaHome className="icon" />
              <Link to={`/`} className="sidebar-link">Home</Link>
            </li>
            <li>
              <FaInfo className="icon" />
              <Link to={`/about`} className="sidebar-link">About</Link>
            </li>
            <li>
              <FaHeartbeat className="icon" />
              <Link to={`/bloodbank/searchbloodbank`} 
                className="sidebar-link"
              >BloodBank</Link>
            </li>
            <li>
              <FaUser className="icon" />
              <Link to={`/profile`} className="sidebar-link">Profile</Link>
            </li>
            <li>
            <FaSignInAlt className="icon" />
              <Link to={`/login`} className="sidebar-link">Login</Link>
            </li>
            <li>
              <FaUserPlus className="icon"/>
              <Link to={`/signup`} className="sidebar-link">signup</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
    )
}
export default SideBarComponent