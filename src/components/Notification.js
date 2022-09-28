import React from 'react';
import './Notification.css'

export default function Notification(props) {

  const notificationData = props.notification
  const severities = {
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Very High"
  };
 

  const badgeStyle = {
    color: "white",
    backgroundColor: getBadgeColor(),
    marginLeft: "10px"
  };

  function getBadgeColor() {
    if(notificationData.severity=== 1) {
      return '#ffd700';
    }
    if(notificationData.severity===2){
      return '#FFA500'
    }
    if(notificationData.severity===3){
      return '#ff0000'
    }
    if(notificationData.severity===4){
      return '#800000'
    } 
  }
  return (
    <div className="container row" style={{border: "1px solid white"}}>
     
      <button id="notification-card" className="flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <div className="d-flex flex-direction-row">
            <h5 className="mb-1"  style={{color: "black !important"}}>Title: {notificationData.title}</h5>
            <h5 style={badgeStyle}  className="badge badge-pill badge-info"  >{severities[notificationData.severity]}</h5>
          </div>
        </div>
        <div className="mb-1">Comment: {notificationData.comments}</div>
        <div className="mb-1">Status: {notificationData.status}</div>
        <div className="container row"></div>
      </button>
    </div>
    
  )
}
