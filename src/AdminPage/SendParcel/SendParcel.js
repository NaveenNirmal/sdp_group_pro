import React, { useEffect, useState } from 'react';
import './SendParcel.css';
import MaterialTable from "material-table";
import { alpha } from '@material-ui/core/styles';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import fireDb from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SendParcel() {

    const [sendParcelData,setSendParcelData] = useState({
        orderId:'',
        dateSending:'',
        timeSending:'',
        routePath:'',
        endLocation:'',
        assignVehicle:'',
        statusNotDelivered:''
    });

    const [ParcelData,setParcelData] = useState([]);
    const [collectedData,setCollectedData] = useState([]);
    const [vehicleData,setVehicleData] = useState([]);
    const [serviceAreaData,setServiceAreaData] = useState([]);


    const parcelCollection = collection(fireDb,'sendparcel_toanother');
    const vehicleCollection = collection(fireDb,'vehicle_data');
    const serviceAreaCollection = collection(fireDb, 'service_area');

    // Get Parcel Data Details
    const getParcelData = async () => {
        const parcelData = await getDocs(parcelCollection);
        console.log(parcelData);
        setParcelData(parcelData.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }

    // Get Collected Order Data
    const getCollectedOrderData = async () => {
        await fireDb.collection('order_requests').where('request_status','==','In Sorting Center').get().then(res => {
            setCollectedData(res.docs.map((doc) => ({...doc.data(), id:doc.id})))
        });
    }

    //Get Vehicle Data
    const getVehicleData = async () => {
        const vehiData = await getDocs(vehicleCollection);
        setVehicleData(vehiData.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }

    //Get Service Areas
    const getServiceArea = async () => {
        const reqServiceRequestData = await getDocs(serviceAreaCollection);
        console.log(reqServiceRequestData);
        setServiceAreaData(reqServiceRequestData.docs.map((doc) => ({...doc.data(), id:doc.id})));

    }

    useEffect(() => {
        getParcelData();
        getCollectedOrderData();
        getVehicleData();
        getServiceArea();
    },[]);

    const handleInputChange = (e) => {
        e.persist();
        setSendParcelData({...sendParcelData, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addDoc(collection(fireDb,'sendparcel_toanother'),sendParcelData).then((res) => {
            console.log(res);
            toast.success('Parcel Data Added Successfully',5000);
            getParcelData();
        }).catch((err) => {
            console.log(err);
            toast.error(`Error:${err}`,5000);
        })
    }

    const data = {
        columns:[
            {
                title:'#Order_ID',
                field:'orderid'
            },
            {
                title:'Date of Sending',
                field:'sendingdate'
            },
            {
                title:'Time of Sending',
                field:'sendingtime'
            },
            {
                title:'Route Path',
                field:'routepath'
            },
            {
                title:'End Location',
                field:'endlocation'
            },
            {
                title:'Assigned Vehicle',
                field:'assignedvehicle'
            },
            {
                title:'Delivered Status',
                field:'deliveredstatus'
            }
        ],
        rows:ParcelData.map((item) => {
            return{
                orderid:item.orderId,
                sendingdate:item.dateSending,
                sendingtime:item.timeSending,
                routepath:item.routePath,
                endlocation:item.endLocation,
                assignedvehicle:item.assignVehicle,
                deliveredstatus:item.statusNotDelivered
            }
        })
    }

  return (
    <>
        <div className="container-fluid">
        <ToastContainer theme="colored"/>
            <div className="row">
                <div className="col-md-12 sendParcel__Header">
                    <h4 className="sendParcel__Heading">Send Parcel to Another Center</h4>
                </div>
                <div className="col-md-4 sendParcel__Form">

                    <form className="row g-2" onSubmit={handleSubmit}>

                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="orderId">Order ID</label>
                            <select className="form-select" value={sendParcelData.orderId}
                            onChange={handleInputChange} name="orderId" id="orderId">
                                <option selected> -- Select Order ID -- </option>

                                {
                                    collectedData.map((item) => {
                                        return(
                                            <option key={item.id} value={item.id}>{item.id}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="dateSending">Date of Sending</label>
                            <input type="date" className="form-control" 
                            value={sendParcelData.dateSending}
                            onChange={handleInputChange} 
                            name="dateSending" id="dateSending" />
                        </div>

                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="timeSending">Time of Sending</label>
                            <input type="time" className="form-control" value={sendParcelData.timeSending}
                            onChange={handleInputChange} name="timeSending" id="timeSending" />
                        </div>

                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="routePath">Route Path</label>
                            <select className="form-select" value={sendParcelData.routePath}
                            onChange={handleInputChange} name="routePath" id="routePath">
                                <option selected>--Select Route Path--</option>
                                <option value="Colombo to Matara">Colombo to Matara</option>
                                <option value="Colombo to Kurunegala">Colombo to Kurunegala</option>
                                <option value="Colombo to Puttalam">Colombo to Puttalam</option>
                                <option value="Colombo to Kandy">Colombo to Kandy</option>
                                <option value="Colombo to Gampaha">Colombo to Gampaha</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="endLocation">End Location</label>
                            <select className="form-select" value={sendParcelData.endLocation}
                            onChange={handleInputChange} name="endLocation" id="endLocation">
                                <option disabled selected> -- </option>
                                {
                                    serviceAreaData.map((item) => {
                                        return(
                                            <option key={item.id} value={item.servicearea_name}>{item.servicearea_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="assignVehicle">Assign Vehicle</label>
                            <select className="form-select" value={sendParcelData.assignVehicle}
                            onChange={handleInputChange} name="assignVehicle" id="assignVehicle">
                                <option> --Select Vehicle--</option>
                                {
                                    vehicleData.map((item) => {
                                        return(
                                            <option key={item.id} value={item.vehiNo}>{item.vehiNo}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="statusNotDelivered">Delivered Status</label>
                            <select className="form-select" value={sendParcelData.statusNotDelivered}
                            onChange={handleInputChange} name="statusNotDelivered" id="statusNotDelivered">
                                <option value="Not Delivered">Not Delivered</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" id="sendParcel__btn">Place Send Details</button>
                    </form>
                </div>
                <div className="col-md-7 mx-5">
                <MaterialTable
                        title={""}
                        data={data.rows}
                        columns={data.columns}
                        options={{
                            sorting: true, search: true,
                            searchFieldAlignment: "left", searchAutoFocus: true, searchFieldVariant: "standard",
                            filtering: false, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
                            paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
                            exportAllData: true, exportFileName: "On Request Data", addRowPosition: "first", actionsColumnIndex: -1, selection: false,
                            showSelectAllCheckbox: false, showTextRowsSelected: false,
                            columnsButton: true,
                            headerStyle:{textAlign:"center",backgroundColor:"#1e2d42",color:"#fff",padding:"5px",fontWeight:"bold"}
                        }}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default SendParcel