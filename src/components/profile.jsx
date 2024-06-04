'use client'
import '../componentCSS/profile.css'
import React from "react";
import { useState,useEffect } from "react";
import { backend_url } from "./BackenUrl";
import { useNavigate } from 'react-router-dom';
function ProfileComponent(){
    const navigate=useNavigate()
    const [user,setUser]=useState('')
    useEffect(()=>{
      (async ()=>{
        const response=await fetch(`${backend_url}/auth/profile`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':localStorage.getItem('token')
            }
        })
        const data=await response.json()
        if(data.status==401){
            navigate('/login')
        }
        setUser(data.profile)
      })()
    },[])

    if(!user){
      return (
        <div>Loading...</div>
      )
    }
    return (
        <>
      <div className="profile-container">
      <div className="profile-field">
        <label className="label">Name:</label>
        <span className="value">{user.name}</span>
      </div>
      <div className="profile-field">
        <label className="label">Email:</label>
        <span className="value">{user.email}</span>
      </div>
      <div className="profile-field">
        <label className="label">Contact Number:</label>
        <span className="value">{user.contactNumber}</span>
      </div>
      <div className="profile-field">
        <label className="label">BloodGroup:</label>
        <span className="value">{user.bloodGroup}</span>
      </div>
      <div className="button-container">
        {user.bloodBank? (
          <button className="button"
            onClick={(e)=>navigate(`/bloodbank/ownerbloodbank`)}
          >Blood Bank</button>
        ) : (
          <button className="button"
            onClick={(e)=>navigate(`/bloodbank/registerbloodbank`)}
          >Create Blood Bank</button>
        )}
      </div>
    </div>
        </>
    )
}
export default ProfileComponent