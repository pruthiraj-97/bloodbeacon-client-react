import { backend_url } from './BackenUrl'
import '../componentCSS/BloodGroup.css'
import React from "react"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function BloodGroupCompo({group,count,id}){
    const navigation=useNavigate()
    const [isEditing,setIsEditing]=useState(false)
    const [newCount,setNewCount]=useState(count)
    const [prevCount,setPrevCount]=useState(count)
  async  function editBloodGroup(e){
      e.preventDefault()
      setIsEditing(false)
      const response=await fetch(`${backend_url}/bloodbank/updatebloodgroup/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'x-access-token':localStorage.getItem('token')
        },
        body:JSON.stringify({
          group:group,
          count:newCount
        })
      })
      const data=await response.json()
      if(data.status==401){
        navigation('/login')
      }else if(data.status==400||data.status==500){
        throw new Error(data.message)
      }else{
        setPrevCount(newCount)
      }
    }

    return (
      <div className="blood-group-card">
      <span className="group">{group}</span>
      <span className="count">{prevCount}</span>
      <span className="edit-icon" onClick={()=>setIsEditing(!isEditing)}>✏️</span>
      {isEditing && (
        <div className="edit-form">
          <input 
            type="number" 
            value={newCount} 
            onChange={(e)=>setNewCount(e.target.value)} 
            className="edit-input"
          />
          <button onClick={editBloodGroup} className="edit-submit">Submit</button>
        </div>
      )}
    </div>
    )
}

export default BloodGroupCompo