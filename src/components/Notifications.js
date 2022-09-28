// import React from 'react';
// import Notification from './Notification';


// export default function Notifications() {

//   const notificationsData = [
//     {"TechnicianId": 1 , "EquipmentId":1,"Title":"Increase Temperature", "Comment":"Nunc non in nibh urna. Aliquet id potenti justo nunc dis tortor lacus viverra tristique nam. Aptent amet sociosqu. Praesent.","Severity":3,"Status":"Active"},
//     {"TechnicianId": 2, "EquipmentId":2,"Title":"Decrese Temperature", "Comment":"Nunc non in nibh urna. Aliquet id potenti justo nunc dis tortor lacus viverra tristique nam. Aptent amet sociosqu. Praesent.","Severity":4, "Status":"Completed"}
//   ]

//   return (
//     <>
//     <div>Notifications</div>
//     <div className="list-group">
//       {notificationsData.map((notification,index)=>{   
//         return <Notification notification={notification}/> 
//       })}
//       </div>
//     </>
//   )
// }

import React, { useEffect, useState } from 'react';
import Notification from './Notification';


export default function Notifications(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const data = props.data
  const [notificationsData, setNotificationData] = useState(data);
  useEffect(() => {
    setTimeout(() => {
      console.log(props.data);
    }, 1000);
  }, [])
  return (
    <>
      <div className="dropdown show">
        <button style={{ backgroundColor: "black" }} onClick={toggleOpen} className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
          Filter by
        </button>
        <ul style={{ backgroundColor: "black", color: "white" }} className={`text-small dropdown-menu ${isOpen ? " show" : ""}`}>
          <li><button className="text-small dropdown-item" style={{ color: "white" }} onClick={
            (e) => {
              e.preventDefault();
              setNotificationData(data);
              setIsOpen(false);
            }
          }>Show all notifications</button></li>
          <li><button className="text-small dropdown-item" style={{ color: "white" }} onClick={
            (e) => {
              e.preventDefault();
              setNotificationData(data.filter((d) => d.status === "active"));
              setIsOpen(false);
            }
          }>Show active notifications</button></li>
          <li><button className="text-small dropdown-item" style={{ color: "white" }} onClick={
            (e) => {
              e.preventDefault();
              setNotificationData(data.filter((d) => d.status === "dismissed"));
              setIsOpen(false);
            }
          }>Show dismissed notifications</button></li>
          <li><button className="text-small dropdown-item" style={{ color: "white" }} onClick={
            (e) => {
              e.preventDefault();
              setNotificationData(data.filter((d) => d.status === "completed"));
              setIsOpen(false);
            }
          }>Show completed notifications</button></li>
          {/* <li><button className="text-small dropdown-item" style={{color: "white"}}>Type</button></li> */}
        </ul>
      </div>
      <div className="list-group">
        {notificationsData.map((notification, index) => {
          return <Notification notification={notification} />
        })}
      </div>
    </>
  )
}