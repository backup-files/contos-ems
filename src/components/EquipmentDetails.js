import React from 'react';
import './EquipmentDetails.css';
import { isAdminLoggedIn,isLoggedIn } from './services/Auth';
import { useNavigate } from 'react-router-dom1';

export default function EquipmentDetails(props) {
    const details = props.data;
    const navigate = useNavigate();
    return (
        <div>
            <div className="container">
                <div className="card" style={{ backgroundColor: "black", borderColor: "black", color: "white" }}>
                    <div className="card-body" style={{ borderColor: "black" }}>
                        <h3 className="card-title">{details.id}: {details.name}</h3>
                        <h6 className="card-subtitle">{details.manufacturer}</h6>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="white-box text-center">
                                    <img src={details.imageLink} alt="Equipment image cap" /></div>
                            </div>
                            <div className="col-sm-6">
                                <h4 className="box-title mt-5">Equipment description</h4>
                                <p>{details.description}</p>
                                {/* <button className="btn btn-primary btn-rounded"  href="AddNotification">Raise Notification</button> */}
                                {(() => {
                                    if (!isAdminLoggedIn() && isLoggedIn()) { return <button className="btn btn-primary btn-rounded" onClick={(e) => {
                                        e.preventDefault();
                                        navigate('/AddNotification', {
                                            state: {
                                                name: details.name
                                            }
                                        })
                                    }}>Raise Notification</button> }
                                })()
                                }
                                <h3 className="box-title mt-5">Key Features</h3>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check text-success"></i>Type: {details.type}</li>
                                    <li><i className="fa fa-check text-success"></i>Model: {details.model}</li>
                                </ul>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <h3 className="box-title mt-5">General Info</h3>
                                <div className="table-responsive">
                                    <table className="table table-striped table-product">
                                        <tbody>
                                            <tr>
                                                <td style={{ paddingLeft: "5px" }} width="390">Manufacturer</td>
                                                <td style={{ paddingLeft: "5px" }}>{details.manufacturer}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: "5px" }} width="390">temperature</td>
                                                <td style={{ paddingLeft: "5px" }}>{details.temperature}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: "5px" }}>Installation Date</td>
                                                <td style={{ paddingLeft: "5px" }}>{details.installedDate}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: "5px" }}>Service Due Date</td>
                                                <td style={{ paddingLeft: "5px" }}>{details.serviceDueDate}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: "5px" }}>Equipment Type</td>
                                                <td style={{ paddingLeft: "5px" }}>{details.type}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: "5px" }}>RPM</td>
                                                <td style={{ paddingLeft: "5px" }}>{details.angularVelocity}</td>
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