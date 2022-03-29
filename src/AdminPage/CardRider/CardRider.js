import React, { useEffect, useState } from "react";
import './CardRider.css'
import fireDb from '../../firebase'
import { collection, Firestore, query, where } from "firebase/firestore";

function CardRider() {

  const [riderCount, setRiderCount] = useState('');

  // const empCollection = collection(fireDb,'employee_data')

  const getRiderCount = async () => {
    const data = fireDb.collection('employee_data').where('empType','==','Rider').get().then(res => {
      setRiderCount(res.size);
      console.log(res.size)
    }).catch(err => {
      console.log(err)
    });

    
  }

  useEffect(() => {
    getRiderCount();
  },[])

  return (
    <>
      <div className="card m-2 card__Rd">
        <div className="cardRd__Header">
          <h4 className="cardRd__Heading">Registered Riders</h4>
        </div>
        <div className="cardRd__Count">
          <h5 className="cardRd__Num">{riderCount}</h5>
          <i class="bi bi-bicycle"></i>
        </div>
      </div>
    </>
  );
}

export default CardRider;
