import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom1';

export default function Equipment(props) {
 var equipments = props.data;
 const navigate = useNavigate();
 useEffect(() => {
  setTimeout(() => {
    console.log(equipments);
  }, 1000);
 }, [])
  return (
    <div className='container'>
      <div className='row'>
        { equipments.map((x,index)=>{ return(
          <div className="col-sm-4">
           <div className="card" style={{width: '18rem',margin:'20px'}}>
           <img className="card-img-top" style={{backgroundColor: "black"}} width="300px" height="400px" src={x.imageLink} alt="Equipment image cap"/> 
           <div className="card-body" style={{backgroundColor: "black"}}>
            <h3 className="card-title">{x.name}</h3> 
            <h2>{x.model}</h2>
            <p className="card-text">{x.manufacturer}</p>
            <button className="btn btn-primary" onClick={
              (e) => {
                e.preventDefault();
                navigate("/EquipmentDetails", {
                  state: {id: x.id}
                });
              }
            }>See More</button>
           </div>
       </div>
        </div>)})} 
        </div>
    </div>
  )
}