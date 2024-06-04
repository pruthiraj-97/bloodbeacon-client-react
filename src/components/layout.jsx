import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
import SideBarComponent from "./leftSideBar";
function LayOut(){
    return(
        <>
         <HeaderNavbar/>
         <Outlet/>
        </>
    )
}
export default LayOut