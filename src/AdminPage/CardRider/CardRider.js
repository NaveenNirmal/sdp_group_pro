import React from "react";
import './CardRider.css'

function CardRider() {
  return (
    <>
      <div className="card m-2 card__Rd">
        <div className="cardRd__Header">
          <h4 className="cardRd__Heading">Registered Riders</h4>
        </div>
        <div className="cardRd__Count">
          <h5 className="cardRd__Num">9999</h5>
          <i class="bi bi-bicycle"></i>
        </div>
      </div>
    </>
  );
}

export default CardRider;
