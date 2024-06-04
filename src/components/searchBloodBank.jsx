'use client'
import '../componentCSS/searchBloodBank.css'
import React from "react"
import { useState,useEffect } from "react"
import { bloodGroup } from "./BloodGroup"
import { getLocation } from '../dataControl/getLocation'
import { backend_url } from './BackenUrl'
import { useNavigate } from 'react-router-dom'
function SearchBloodBankCompo(){
    const navigate=useNavigate()
    const [maxDistance,setMaxDistance]=useState('')
    const [BloodGroup,setBloodBank]=useState('')
    const [errors,setErrors]=useState([])
    const [message,setMessage]=useState('')
    const [contactNumber,setContactNumber]=useState('')
    const [bloodGroupNeed,setBloodGroupNeed]=useState('')
    const [isRequestSuccess,setIsRequestSuccess]=useState(false)
    async function getNearBloodbank(e){
        e.preventDefault()
        const posttion=await getLocation()
        const response=await fetch(`${backend_url}/userbloodbank/searchbloodbank`,{
          method:'POST',
          headers:{
             'Content-Type':'application/json',
             'x-access-token':localStorage.getItem('token')
          },
          body:JSON.stringify({
             longitude:posttion.lon,
             latitude:posttion.lat,
             bloodGroup:BloodGroup
          })
        })
        const data=await response.json()
        if(data.status==200){
           const bloodBanks=data.searchBloodBanks
           navigate(`/bloodbank/nearbloodbank`,{state:bloodBanks})
        }else if(data.status==400){
            setErrors(data.message)
        }else{
            throw new Error(data.message)
        }
      }
      async function postEmergencyRequest(e){
        e.preventDefault()
        const response=await fetch(`${backend_url}/notification/sendnotification`,{
          method:'POST',
          headers:{
             'Content-Type':'application/json',
             'x-access-token':localStorage.getItem('token')
          },
          body:JSON.stringify({
            message:message,
            bloodGroup:bloodGroupNeed,
            contactNumber:contactNumber
          })
        })
        const data=await response.json()
        if(data.status==200){
          setIsRequestSuccess(true)
        }else if(data.status==500){
          throw new Error(data.message)
        }else if(data.status==401){
            navigate('/login')
        }else{
          setErrors(data.message)
        }
      }
    

    return (
  <div className="search-bloodBank">
    {
        errors.length>0&&errors.map((error,index)=>(
            <p key={index}>{error}</p>
        ))
    }
    <h3>Search BloodBank near you</h3>
    <form className="distance-filter">
        <input 
          type="number" 
          placeholder="Enter max distance (KM)" 
          value={maxDistance} 
          onChange={(e) => setMaxDistance(e.target.value)} 
        />
           <select onChange={(e) => setBloodBank(e.target.value)}>
          <option value="">Select Blood Group</option>
           {bloodGroup.map((group, index) => (
              <option key={index} value={group}>{group}</option>
           ))}
        </select>
        <button type="submit" onClick={getNearBloodbank}>Search</button>
      </form>
      <h3 className='emergency-request-h3'>Post Emergency Request</h3>
            <form className="emergency-request" onSubmit={postEmergencyRequest}>
                <textarea
                    name="message"
                    placeholder="Enter your emergency message"
                    onChange={(e)=>setMessage(e.target.value)}
                />
                <select 
                    name="bloodGroup" 
                    onChange={(e)=>setBloodGroupNeed(e.target.value)}
                >
                    <option value="">Select Blood Group</option>
                    {bloodGroup.map((group, index) => (
                        <option key={index} value={group}>{group}</option>
                    ))}
                </select>
                <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Enter your mobile number"
                    onChange={(e)=>setContactNumber(e.target.value)}
                />
                <button type="submit">Post Request</button>
                {
                  isRequestSuccess?<p>Request Sent Successfully</p>:null
                }
            </form>
        </div>
    )
}

export default SearchBloodBankCompo