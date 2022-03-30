import React, { useEffect, useState } from 'react';
import './CollectParcel.css';
import fireDb from '../../firebase';
import MaterialTable from "material-table";
import { alpha } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, getDocs } from 'firebase/firestore';

function CollectParcel() {

    const [calculationData,setCalculationData] = useState({
        parcelWeight:0,
        parcelDistance:0
    });

    const [currentId,setCurrentId] = useState('');
    
    const [finalTotal,setFinalTotal] = useState(0);

    console.log(currentId)

    const [collectedData,setCollectedData] = useState([]);

    var weight = calculationData.parcelWeight;
    var distance = calculationData.parcelDistance;
    var price =0;

    var distancePrice = 0;
    var weightPrice = 0;

    const priceDataCollection = collection(fireDb,'parcel_price');

    const handleChange = (e) => {
        e.persist();
        setCalculationData({...calculationData,[e.target.name]:e.target.value});

        
        if (weight >= 10) {
            weightPrice = 100;
        }
        if (weight >= 50) {
            weightPrice = 250;
        }
        if (weight >= 100) {
            weightPrice = 500;
        }

        price = (distance*distancePrice)+(weight*weightPrice)
        setFinalTotal(price);

        if (distance >= 10) {
            distancePrice = 100;
        }
        if (distance >= 50) {
            distancePrice = 80;
        }
        if (distance >= 100) {
            distancePrice = 50;
        }
        
        price = (distance*distancePrice)+(weight*weightPrice)
        setFinalTotal(price);
    }

    const getCollectedData = async () => {
        await fireDb.collection('order_requests').where('request_status','==','Collected').get().then(res => {
            setCollectedData(res.docs.map((doc) => ({...doc.data(), id:doc.id})))
            console.log(collectedData)
        });
    }

    useEffect(() => {
        getCollectedData();
    },[]);

    const handleGetCurrentId = (e) => {
        var id=e.target.value
        setCurrentId(id);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            parcelWeight:calculationData.parcelWeight,
            parcelDistance:calculationData.parcelDistance,
            parcelPrice:finalTotal,
            currentId:currentId
        }

        await addDoc(collection(fireDb,'parcel_price'),formData).then((res) => {
            console.log(res)
            toast.info(`Amount Added to:${currentId}`, 5000);

        }).catch((err) => {
            toast.error(`${err}`, 5000);
        })

        await fireDb.collection('tracking').doc(currentId).update({InSortingCenter:true}).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

        await fireDb.collection('order_requests').doc(currentId).update({request_status:'In Sorting Center'}).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    const data = {
        columns:[
            {
                title:'Order #Req_ID',
                field:'orderid'
            },
            {
                title:'Customer Location',
                field:'cxlocation'
            },
            {
                title:'Reciver Name',
                field:'recievername'
            },
            {
                title:'Reciever Address',
                field:'reciveraddress'
            },
            {
                title:'Reciever City',
                field:'recievercity'
            },
            {
                title:'Action',
                field:'action'
            }
        ],
        rows:collectedData.map((item) => {
            return{
                orderid:item.id,
                cxlocation:item.customer_live_servicearea,
                recievername:item.receiver_name,
                reciveraddress:item.receiver_address,
                recievercity:item.receiver_city,
                action:<button className="btn btn-warning btn-sm" value={item.id} onClick={handleGetCurrentId}>Set Price</button>,
                // action:<button className="btn btn-warning" onClick={setCalculationData({currentId:item.currentId})}></button>
            }
        })
    }

  return (
    <>
        <div className="container-fluid">
            <ToastContainer theme="colored"/>
            <div className="row">
                <div className="col-md-12">
                     <div className="collectParcel__Header">
                        <h4 className="collectParcel__Heading">Collect Parcel from Rider</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="collectParcel__ReqId">
                        <h6 className="collectParcel__ReqIdHead">Request ID: <b>{currentId?currentId:'No ID Selected'}</b></h6>
                    </div>
                    <form className="row g-2 collect__Parcel" onSubmit={handleSubmit}>
                        <div className="form-group col-md-3">
                            <label className="form-label" htmlFor="parcelWeight">Weight (KG)</label>
                            <input type="number" className="form-control" onChange={handleChange} value={calculationData.parcelWeight} name="parcelWeight" id="parcelWeight" />
                        </div>
                        
                        <div className="form-group col-md-3">
                            <label className="form-label" htmlFor="parcelDistance">Distance (KM)</label>
                            <input type="number" className="form-control" onChange={handleChange} value={calculationData.parcelDistance} name="parcelDistance" id="parcelDistance" />
                        </div>

                        <div className="form-group col-md-3">
                            <label className="form-label" htmlFor="parcelPrice">Final Total</label>
                            <input type="number" className="form-control" onChange={handleChange} value={finalTotal} name="parcelPrice" id="parcelPrice" readOnly/>
                        </div>
                        <button type="submit" className="btn btn-success btn-sm" name="btn__CollectParcel" id="btn__CollectParcel" disabled={currentId?false:true}>Save Data</button>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
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
                            headerStyle:{textAlign:"center",backgroundColor:"#1e2d42",color:"#fff",padding:"2px",fontWeight:"bold"}
                        }}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default CollectParcel