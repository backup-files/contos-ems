import React from 'react';


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
    if(notificationData["Severity"] == 1) {
      return '#ffd700';
    }
    if(notificationData["Severity"]==2){
      return '#FFA500'
    }
    if(notificationData["Severity"]==3){
      return '#ff0000'
    }
    if(notificationData["Severity"]==4){
      return '#800000'
    } 
  }
  return (
    <div className="container row">
     
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <div className="d-flex flex-direction-row">
            <h5 className="mb-1">Title: {notificationData.Title}</h5>
            
            <h5 style={badgeStyle}  className="badge badge-pill badge-info"  >{severities[notificationData.Severity]}</h5>
           
          </div>

          
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Comment: {notificationData.Comment}</p>
        <p className="mb-1">Status: {notificationData.Status}</p>

        <div className="container row"></div>
      </a>
    </div>
    
  )
}

