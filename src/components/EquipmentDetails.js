import React from 'react'

export default function EquipmentDetails() {
  return (
    <div>
      <div className="container">
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">Equipment ID ----Equipment Name</h3>
            <h6 className="card-subtitle">Equipment Brief Description</h6>
            <div className="row">
                <div className="col-sm-6">
                    <div className="white-box text-center">
                        <img src="https://th.bing.com/th/id/OIP.nJRf2KD0ltgRkXIucrohpAHaDp?pid=ImgDet&rs=1" 
                        alt="Equipment image cap"/></div>
                </div>
                <div className="col-sm-6">
                    <h4 className="box-title mt-5">Equipment description</h4>
                    <p>Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don't
                       look even slightly believable.but the majority have suffered alteration in some form,by injected humour</p>
                    <button className="btn btn-primary btn-rounded">Raise Notification</button>
                    <h3 className="box-title mt-5">Key Features</h3>
                    <ul className="list-unstyled">
                        <li><i className="fa fa-check text-success"></i>Equipment Type</li>
                        <li><i className="fa fa-check text-success"></i>Location</li>
                        <li><i className="fa fa-check text-success"></i>Equipment Model</li>
                    </ul>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-5">General Info</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-product">
                            <tbody>
                                <tr>
                                    <td width="390">Manufacturer</td>
                                    <td>Stellar</td>
                                </tr>
                                <tr>
                                    <td width="390">temperature</td>
                                    <td>Stellar</td>
                                </tr>
                                <tr>
                                    <td>Installation Date</td>
                                    <td>Knock Down</td>
                                </tr>
                                <tr>
                                    <td>Service Due Date</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Equipment Type</td>
                                    <td>Office Chair</td>
                                </tr>
                                <tr>
                                    <td>RPM</td>
                                    <td>Contemporary&amp;Modern</td>
                                </tr>
                                <tr>
                                    <td>Care Instructions</td>
                                    <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                                </tr>
                                <tr>
                                    <td>Finish Type</td>
                                    <td>Matte</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>

  )
}
