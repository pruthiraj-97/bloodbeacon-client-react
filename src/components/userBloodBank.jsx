import '../componentCSS/userBloodGroup.css'
import React from "react";
function UserBloodGroup({group,count}){
    return (
    <div className="blood-group-card">
      <span className="group">{group}</span>
      <span className="count">{count}</span>
    </div>
    )
}
export default UserBloodGroup