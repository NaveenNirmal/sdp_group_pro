import React from "react";
import './CardCustomer.css'

function CardCustomer() {
  return (
    <>
      <div className="card m-2">
        <div className="cardCx__Header">
          <h4 className="cardCx__Heading">Registered Customers</h4>
        </div>
        <div className="cardCx__Count">
          <h5 className="cardCx__Num">9999</h5>
          <i class="bi bi-person-check-fill"></i>
        </div>
      </div>
    </>
  );
}

export default CardCustomer;
