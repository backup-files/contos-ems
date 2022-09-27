import React from 'react';


export default function Equipment() {


 var equipments=[{ Name: "ABC",Model: "EQ-01", Manufacturer:"XYZ"},
 { Name: "ABC",Model: "EQ-01", Manufacturer:"XYZ"},
 { Name: "ABC",Model: "EQ-01", Manufacturer:"XYZ"},
 { Name: "ABC",Model: "EQ-01", Manufacturer:"XYZ"},
 { Name: "ABC",Model: "EQ-01", Manufacturer:"XYZ"},
 { Name: "ABC",Model: "EQ-01", Manufacturer:"XYZ"},
 { Name: "ABC",Model: "EQ-01", Manufacturer:"XYZ"}
  ];
  return (
    <div className='container'>
      <div className='row'>
        { equipments.map((x,index)=>{ return(
          <div className="col-sm-4">
           <div className="card" style={{width: '18rem',margin:'20px'}}>
           {<img className="card-img-top" src="https://th.bing.com/th/id/OIP.nJRf2KD0ltgRkXIucrohpAHaDp?pid=ImgDet&rs=1" alt="Equipment image cap"/> }
           <div className="card-body">
            <h3 className="card-title">{x.Name}</h3> 
            <h2>{x.Model}</h2>
            <p className="card-text">{x.Manufacturer}</p>
            <a href="/EquipmentDetails" className="btn btn-primary">See More</a>
           </div>
       </div>
        </div>)})} 
        </div>
    </div>
  )
}