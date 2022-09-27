import React from 'react';
import Notification from './Notification';


export default function Notifications() {
   
  const notificationsData = [
    {"TechnicianId": 1 , "EquipmentId":1,"Title":"Increase Temperature", "Comment":"Nunc non in nibh urna. Aliquet id potenti justo nunc dis tortor lacus viverra tristique nam. Aptent amet sociosqu. Praesent.","Severity":3,"Status":"Active"},
    {"TechnicianId": 2, "EquipmentId":2,"Title":"Decrese Temperature", "Comment":"Nunc non in nibh urna. Aliquet id potenti justo nunc dis tortor lacus viverra tristique nam. Aptent amet sociosqu. Praesent.","Severity":4, "Status":"Completed"}
  ]
    
  return (
    <>
    <div>Notifications</div>
    <div className="list-group">
      {notificationsData.map((notification,index)=>{   
        return <Notification notification={notification}/> 
      })}
      </div>
    </>
  )
}
