import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import './TrackingPage.css';
import fireDb from '../../firebase'
import { collection, doc, getDocs } from 'firebase/firestore';

function TrackingPage() {
    
    const {id} = useParams();

    const [trackingData,setTrackingData] = useState([]);

    const [currentId,setCurrentId] = useState('')

    

    // const trackingCollection = collection(fireDb,'tracking');

    const getTrackingData = async () => {
        const trackData = await fireDb.collection('tracking').doc(id).get();

        console.log(trackData);

        setTrackingData(trackData.docs.map((doc) => ({...doc.data(),id:doc.id})));

        console.log(trackingData);
    }

    useEffect(() => {
        
        getTrackingData();

        // setCurrentId(id);

        // console.log(currentId)

        console.log(trackingData)
    },[id])

  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="orderId__Box">
                        <h5 className="order__ID">Order Id: {id}</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <table>
                    <thead>
                        <tr>
                            <th>*</th>
                            <th>*</th>
                            <th>*</th>
                            <th>*</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trackingData.map((trackdata) => {
                                return(
                                    <tr key={trackdata.id}>
                                        <td>
                                            {trackdata.Accepted?<span className="accepted">Accepted <i class="bi bi-box"></i></span>:<span></span>}
                                        </td>
                                        <td>
                                            {trackdata.InSortingCenter?<span className="insortingcenter">In Sorting Center <i class="bi bi-building"></i></span>:<span></span>}
                                        </td>
                                        <td>
                                            {trackdata.InTransist?<span className="intransist">In Transist <i class="bi bi-truck"></i></span>:<span></span>}
                                        </td>
                                        <td>
                                            {trackdata.ArrivedAtWarehouse?<span className="arrivedatwarehouse">Arrived at Warehouse <i class="bi bi-boxes"></i></span>:<span></span>}
                                        </td>
                                        <td>
                                            {trackdata.Delivered?<span className="delivered">Delivered <i class="bi bi-check2-all"></i></span>:<span></span>}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default TrackingPage