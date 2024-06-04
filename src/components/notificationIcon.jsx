import React from "react";
import { FaBell } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
function NotificationIcon(){
    const navigate=useNavigate()
    return (
        <FaBell className="icon"
           onClick={(e)=>navigate(`/profile/notification`)}
        />
    )
}
export default NotificationIcon