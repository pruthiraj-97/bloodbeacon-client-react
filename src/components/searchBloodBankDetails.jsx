import '../componentCSS/userBloodBank.css'
import React from "react";
import { backend_url } from './BackenUrl';
import { useState,useEffect } from "react";
import UserBloodGroup from './userBloodBank';
import { useParams } from 'react-router-dom';
function BloodBankDetail(){
    const params=useParams()
    const [bloodbankObj, setBloodbankObj] = useState(null);
    const [id,setId]=useState(params.id)
    useEffect(()=>{
       (async ()=>{
         const response=await fetch(`${backend_url}/bloodbank/getbloodbank/${id}`,{
          headers:{
            'Content-Type':'application/json',
            'x-access-token':localStorage.getItem('token')
          }
         })
         const data=await response.json()
         setBloodbankObj(data.bloodBank)
       })()
    },[])
    if(!bloodbankObj){
        return (
          <h6>loding...</h6>
        )
    }
    return (
        <>
        <div className="bloodbank-container">
        <h3>{bloodbankObj.name}</h3>
        <p>Contact Number: {bloodbankObj.contactNumber}</p>
        <p>Email: {bloodbankObj.email}</p>
        <p>State: {bloodbankObj.address.state}</p>
        <p>Region: {bloodbankObj.address.region}</p>
        <p>Country: {bloodbankObj.address.country}</p>
        <div className='blood-groups'>
          {Object.entries(bloodbankObj.bloodGroups).map(([group, count]) => (
           <UserBloodGroup key={group} group={group} count={count} id={bloodbankObj._id}/>
          ))
         }
    </div>
    </div>
        </>
    )
}
export default BloodBankDetail