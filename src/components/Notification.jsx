import '../componentCSS/Notification.css'
import React from "react";
import { backend_url } from "./BackenUrl";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {FaTrash} from 'react-icons/fa'
import { filterNotification } from '../dataControl/filternotifiction';
function NotificationCompo(){
    const navigate=useNavigate()
    const [urgentRequests,setUrgentRequests]=useState([])
    useEffect(()=>{
      (async ()=>{
       const response=await fetch(`${backend_url}/notification/getnotification`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'x-access-token':localStorage.getItem('token')
        }
       })
       const data=await response.json()
       if(data.status==401){
        navigate('/login')
       }else if(data.status==200){
          setUrgentRequests(data.notifications.urgentNotifications)
       }else{
        throw new Error(data.message)
       }
      })()
    },[])

    function deleteUrgentNotification(id){
        return async (e)=>{
           e.preventDefault()
           const response=await fetch(`${backend_url}/notification/removenotification/${id}`,{
               method:'DELETE',
               headers:{
                   'Content-Type':'application/json',
                   'x-access-token':localStorage.getItem('token')
               }
           })
           const data=await response.json()
           if(data.status==500){
            throw new Error(data.message)
           }else{
             let newNotification=filterNotification(urgentRequests,id)
             setUrgentRequests(newNotification)
           }
        }
    }

  

    return (
      <div className="notification-container">
       <h3>Urgent Requests</h3>
            {urgentRequests.map((request, index) => (
                <div key={index} className="notification">
                    <div className="notification-content">
                        <div className="user-info">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg" alt="User" className="user-image" />
                            <p>{request.user.name}</p>
                            <FaTrash className='delete-icon' 
                             onClick={deleteUrgentNotification(request._id)}
                            />
                        </div>
                        <div className="request-details">
                            <p>Message:{request.message}</p>
                            <p>Contactnumber: {request.contactNumber}</p>
                            <p>Blood Group: {request.bloodGroup}</p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    )
}
export default NotificationCompo