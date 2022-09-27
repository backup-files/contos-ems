import React from 'react';


export default function Notification(props) {

  const notificationData = props.notification
 
  
  //   function getSeverity(){
  //     if (notificationData["Severity"]==1){
  //       return "Low";
     
  //       }
  //   if (notificationData["Severity"]==2){
  //     return "Medium";
      
  //    }
  //   if (notificationData["Severity"]==3){
  //    return "High";
      
  //    }
  //    if (notificationData["Severity"]==4){
  //      return "Very High";
      
  //   }

  //  }
  
  const badgeStyle = {
    color: getBadgeColor()
  }
  function getBadgeColor() {
    if(notificationData["Severity"] == 1) {
      return '#ffd700';
    }
    if(notificationData["Severity"]==2){
      return '#FFA500'
    }
    if(notificationData["Severity"]==3){
      return '#f08080'
    }
    else{
      return '#8b0000'
    }
  }
  return (
    <div className="container row">
     
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <div className="d-flex flex-direction-row">
            <h5 className="mb-1">Title: {notificationData.Title}</h5>
            
            <span style={badgeStyle} className="badge badge-pill badge-info" id="sev">Severity</span>
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

