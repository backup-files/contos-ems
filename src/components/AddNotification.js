import React, { useRef } from 'react'
import './login.css';
import './noti.css';
import { useLocation } from 'react-router-dom1';
import Navbar from './Navbar';
import { UserManager } from './services/Auth';
import { useNavigate } from 'react-router-dom1';

export default function AddNotification(props) {
  const navigate = useNavigate();
  const location = useLocation();
    const email = UserManager.cred.email;
    const titleRef = useRef();
    const commentsRef = useRef();
    const severityRef = useRef();
    const timestamp = (new Date()).toLocaleDateString('es-CL');
    const status = "active";
  const name = location.state.name;
  const id = location.state.id;
  const serviceDueDate = location.state.serviceDueDate;
  return (
    <>
    <Navbar/>
      <div className="text-center" >
        <h3>Notification</h3>

        <main className="form-signin w-400 m-auto">
          <form style={{ width: "400px" }}  onSubmit={(e) => {
            e.preventDefault();
            const input = {
              "notification": {
                "technicianEmail": email,
                "equipmentId": id,
                "title": titleRef.current?.value,
                "severity": parseInt(severityRef.current?.value),
                "comments": commentsRef.current?.value,
                "timestamp": timestamp,
                "status": status
              }
            }
            props.raiseNotification({ variables: input }).then((data) => {
              alert(data.data.raiseNotification);
              if (data.data.raiseNotification === "Notification raised successfully") {
                console.log(UserManager.cred);
                navigate("/");
              }
            });
          }}>
            <div className="form-floating" >
              <input type="text" className="form-control" disabled id="iid" placeholder={id} />
              <label htmlFor="iid">{id}</label>
            </div>

            <div className="form-floating" >
              <input type="text" className="form-control" disabled id="iitd" placeholder={name} />
              <label htmlFor="iid">{name + " " + serviceDueDate}</label>
            </div>
            <div className="form-floating">
              <input ref={titleRef} type="text" required className="form-control" id="floatingPassword" placeholder="Title" />
              <label htmlFor="floatingPassword">Title</label>
            </div>
            <div className="form-floating">
              <input ref={severityRef} type="number" required min="1" max="4" className="form-control" id="floatingPassword" placeholder="Severity" />
              <label htmlFor="floatingPassword">Severity(1-4)</label>
            </div>
            <div className="form-floating">
              < input ref={commentsRef} type="text" required className="form-control" id="comm" placeholder="Comments" />
              <label htmlFor="comm">Comments</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Send</button>

          </form>
        </main>



      </div>
    </>

  )
}