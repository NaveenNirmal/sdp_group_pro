import React, { useEffect, useState } from 'react';
import fireDb from '../../firebase';
import MaterialTable from "material-table";
import { alpha } from '@material-ui/core/styles';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, getDocs } from 'firebase/firestore';


function DeliverParcelToReciver() {

    const [currentId,setCurrentId] = useState('');
    const [collectedData,setCollectedData] = useState([]);

    const getCollectedData = async () => {
        await fireDb.collection('order_requests').where('request_status','==','Arrived At Warehouse').get().then(res => {
            setCollectedData(res.docs.map((doc) => ({...doc.data(), id:doc.id})))
            console.log(collectedData)
        });
    }
    useEffect(() => {
        getCollectedData();
    },[]);

    const onClick = async (e) => {
        var documentId=e.target.value
        

        await fireDb.collection('tracking').doc(documentId).update({InTransist:true}).then((res) => {
            console.log(res);
            toast.info("Parcel Added to Delivery Queue")
        }).catch((err) => {
            console.log(err);
            toast.error(`${err}`)
        })

        await fireDb.collection('order_requests').doc(documentId).update({request_status:'In Transist'}).then((res) => {
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
                title:'Reciver Contact',
                field:'rservice'
            },
            {
                title:'Action',
                field:'action'
            }

        ],
        rows:collectedData.map((item) => {
            return{
                orderid:item.id,
                recievername:item.receiver_name,
                reciveraddress:item.receiver_address,
                recievercity:item.receiver_city,
                rservice:item.receiver_contact,
                action:<button className="btn btn-info btn-sm" value={item.id} onClick={onClick} >Add to Transist</button>,
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
                        <h4 className="collectParcel__Heading">Send Parcel to Receiver</h4>
                    </div>
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

export default DeliverParcelToReciver