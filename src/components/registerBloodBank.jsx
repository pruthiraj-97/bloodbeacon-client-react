'use client';
import { useEffect, useState } from 'react';
import '../componentCSS/registerBloodBank.css';
import { getLocation } from '../dataControl/getLocation';
import { backend_url } from './BackenUrl';
import { useNavigate } from 'react-router-dom';
function RegisterBloodBankComponent(){
  const navigate=useNavigate()
  const [bloodBankName, setBloodBankName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [errors,setErrors]=useState([])
  const [isRequested,setIsRequested]=useState(false)
  async function registerbloodbank(e){
    e.preventDefault()
    setIsRequested(true)
    const position=await getLocation()
    try {
        const response=await fetch(`${backend_url}/bloodbank/registerbloodbank`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':localStorage.getItem('token')
            },
            body:JSON.stringify({
                name:bloodBankName,
                email,
                contactNumber,
                latitude:position.lat,
                longitude:position.lon
        })
     })
     const data=await response.json()
     if(data.status==500){
      throw new Error(data.message)
     }
     else if(data.status==401){
      navigate('/login')
     }else if(data.status==400){
      setIsRequested(false)
      setErrors(data.message)
     }else if(data.status==200){
       navigate('/bloodbank/ownerbloodbank')
     }
    } catch (error) {
        throw new Error(error)
    }
  }
  
  return (
    <div className="register-blood-bank">
      {
        errors.length>0&&errors.map((error,index)=>{
          return <p key={index}>{errors}</p>
        })
      }
      <h3 className="register-title">Register Blood Bank</h3>
      <form onSubmit={registerbloodbank}>
        <div className="register-group">
          <label className="register-label" htmlFor="bloodBankName">Blood Bank Name</label>
          <input
            className="input"
            type="text"
            id="bloodBankName"
            value={bloodBankName}
            onChange={(e) => setBloodBankName(e.target.value)}
            required
          />
        </div>
        <div className="register-group">
          <label className="register-label" htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="register-group">
          <label className="register-label" htmlFor="contactNumber">Contact Number</label>
          <input
            className="input"
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <button className={isRequested?"register-button-disabled":"register-button"}
         type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterBloodBankComponent;
