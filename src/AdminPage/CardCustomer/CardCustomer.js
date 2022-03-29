import React, { useEffect, useState } from "react";
import './CardCustomer.css'
import fireDb from '../../firebase'
import { collection } from "firebase/firestore";

function CardCustomer() {


  const [cxCount,setCxCount] = useState('');

  const getCxCount = async () => {
    const data = await fireDb.collection('customer').get()

    setCxCount(data.size)

    console.log(cxCount)
  }

  useEffect(() => {

    getCxCount();

  }, [])
  

  return (
    <>
      <div className="card m-2">
        <div className="cardCx__Header">
          <h4 className="cardCx__Heading">Registered Customers</h4>
        </div>
        <div className="cardCx__Count">
            <h5 className="cardCx__Num">{cxCount}</h5>
          <i class="bi bi-person-check-fill"></i>
        </div>
      </div>
    </>
  );
}

export default CardCustomer;
