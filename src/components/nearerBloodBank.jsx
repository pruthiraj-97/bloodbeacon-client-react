'use client'
import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../componentCSS/nearbloodbank.css'
import { useLocation } from "react-router-dom";
function FetchNearBloodBank(){
    const navigate=useNavigate()
    const location=useLocation()
    const [nearBloodBank,setNearBloodBank]=useState([])
    const [errors,setErrors]=useState([])
     useEffect(()=>{
       setNearBloodBank(location.state)
     },[])

    function navigateToBloodBank(bloodbank,distance){
      return (e)=>{
        e.preventDefault()
        const bloodbankString = encodeURIComponent(JSON.stringify(bloodbank));
        navigate(`/bloodbank/${bloodbank._id}`);
      }
    }

    return (
      <div className="near-blood-bank">
      <h3>BloodBank Near you</h3>
      <div className="blood-bank-list">
        {nearBloodBank.length>0&&nearBloodBank.map((bloodbank, index) => (
          <div 
            key={index} 
            className="blood-bank-card"
            onClick={navigateToBloodBank(bloodbank.bloodbank, bloodbank.distance)}
          >
            <h4>{bloodbank.bloodbank.name}</h4>
            <p><strong>Contact Number:</strong> {bloodbank.bloodbank.contactNumber}</p>
            <p><strong>Distance:</strong> {bloodbank.distance}</p>
          </div>
        ))}
      </div>
    </div>
    )
}
export default FetchNearBloodBank