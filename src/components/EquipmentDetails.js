import React from 'react';
import './EquipmentDetails.css';
import { isAdminLoggedIn,isLoggedIn } from './services/Auth';

export default function EquipmentDetails() {
    return (
        <div>
            <div className="container">
                <div className="card" style={{backgroundColor: "black", borderColor: "black", color: "white"}}>
                    <div className="card-body" style={{borderColor: "black"}}>
                        <h3 className="card-title">Equipment ID ----Equipment Name</h3>
                        <h6 className="card-subtitle">Equipment Brief Description</h6>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="white-box text-center">
                                    <img src="https://th.bing.com/th/id/OIP.nJRf2KD0ltgRkXIucrohpAHaDp?pid=ImgDet&rs=1"
                                        alt="Equipment image cap" /></div>
                            </div>
                            <div className="col-sm-6">
                                <h4 className="box-title mt-5">Equipment description</h4>
                                <p>Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don't
                                    look even slightly believable.but the majority have suffered alteration in some form,by injected humour</p>
                                {/* <button className="btn btn-primary btn-rounded"  href="AddNotification">Raise Notification</button> */}
                                {(() => {
            if (!isAdminLoggedIn() && isLoggedIn()){ return <a className="btn btn-primary btn-rounded"  href="AddNotification">Raise Notification</a>}})()
        }

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
                                                <td style={{paddingLeft: "5px"}} width="390">Manufacturer</td>
                                                <td style={{paddingLeft: "5px"}}>Stellar</td>
                                            </tr>
                                            <tr>
                                                <td style={{paddingLeft: "5px"}} width="390">temperature</td>
                                                <td style={{paddingLeft: "5px"}}>Stellar</td>
                                            </tr>
                                            <tr>
                                                <td style={{paddingLeft: "5px"}}>Installation Date</td>
                                                <td style={{paddingLeft: "5px"}}>Knock Down</td>
                                            </tr>
                                            <tr>
                                                <td style={{paddingLeft: "5px"}}>Service Due Date</td>
                                                <td style={{paddingLeft: "5px"}}>Yes</td>
                                            </tr>
                                            <tr>
                                                <td style={{paddingLeft: "5px"}}>Equipment Type</td>
                                                <td style={{paddingLeft: "5px"}}>Office Chair</td>
                                            </tr>
                                            <tr>
                                                <td style={{paddingLeft: "5px"}}>RPM</td>
                                                <td style={{paddingLeft: "5px"}}>Contemporary&amp;Modern</td>
                                            </tr>
                                            <tr>
                                                <td style={{paddingLeft: "5px"}}>Care Instructions</td>
                                                <td style={{paddingLeft: "5px"}}>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                                            </tr>
                                            <tr>
                                                <td style={{paddingLeft: "5px"}}>Finish Type</td>
                                                <td style={{paddingLeft: "5px"}}>Matte</td>
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