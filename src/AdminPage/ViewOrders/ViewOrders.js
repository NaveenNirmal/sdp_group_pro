import React from 'react';
import './ViewOrders.css';
import './script1.js';
import { NavLink } from 'react-router-dom';

function ViewOrders() {
    return (
        <>
            <div className="container-fluid" id="viewallorder__Container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="viewallorder__Header">
                            <h4 className="viewallorder__Heading">View All Orders</h4>

                            <div className="order__Searching">
                                <form class="d-flex order__viewallorder">
                                    <input class="form-control me-2" type="search" placeholder="Search by Order ID"/>
                                    <button class="btn btn-outline-success" type="submit">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="viewallorder__Table">
                            <table className="table">
                                <thead className="table-dark">
                                    <tr>
                                        <th>#OrderReqID</th>
                                        <th>Cx Name</th>
                                        <th>Request Date</th>
                                        <th>Request Time</th>
                                        <th>Scheduled Time</th>
                                        <th>Reciever Name</th>
                                        <th>Reciever Contact</th>
                                        <th>Weight (KG)</th>
                                        <th>Type</th>
                                        <th>Reciever Service Area</th>
                                        <th>Reciever Address</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>OD00001</td>
                                        <td>Chathuna Samodya</td>
                                        <td>01-02-2021</td>
                                        <td>13:20:00</td>
                                        <td>15:00:00</td>
                                        <td>Parinda Sathsara</td>
                                        <td>+(94) 760770722</td>
                                        <td>2Kg</td>
                                        <td>Normal</td>
                                        <td>Gampaha</td>
                                        <td>No: 206/36, Kottawa, Makubura</td>
                                        <td className="order__Status">Confirm</td>
                                        <td>
                                            <NavLink to="#rowCollapse" className="order__Track" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="rowCollapse">Track Order</NavLink>
                                        </td>
                                    </tr>
                                    <tr className="rowCollapseDown">
                                        <td colSpan="13" className="order_Statsus">
                                            <div className="collapse row__Collapse" id="rowCollapse">
                                                <span className="accepted">Accepted <i class="bi bi-box"></i></span>
                                                <span className="insortingcenter">In Sorting Center <i class="bi bi-building"></i></span>
                                                <span className="intransist">In Transist <i class="bi bi-truck"></i></span>
                                                <span className="arrivedatwarehouse">Arrived at Warehouse <i class="bi bi-boxes"></i></span>
                                                <span className="delivered">Delivered <i class="bi bi-check2-all"></i></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>OD00001</td>
                                        <td>Chathuna Samodya</td>
                                        <td>01-02-2021</td>
                                        <td>13:20:00</td>
                                        <td>15:00:00</td>
                                        <td>Parinda Sathsara</td>
                                        <td>+(94) 760770722</td>
                                        <td>2Kg</td>
                                        <td>Normal</td>
                                        <td>Gampaha</td>
                                        <td>No: 206/36, Kottawa, Makubura</td>
                                        <td className="order__Status1">Pending</td>
                                    </tr>

                                    <tr>
                                        <td>OD00001</td>
                                        <td>Chathuna Samodya</td>
                                        <td>01-02-2021</td>
                                        <td>13:20:00</td>
                                        <td>15:00:00</td>
                                        <td>Parinda Sathsara</td>
                                        <td>+(94) 760770722</td>
                                        <td>2Kg</td>
                                        <td>Normal</td>
                                        <td>Gampaha</td>
                                        <td>No: 206/36, Kottawa, Makubura</td>
                                        <td className="order__Status2">Cancel</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewOrders
