import React from "react";
import './CardOrder.css'

function CardOrder() {
  return (
    <>
      <div className="card m-2 card__Od">
        <div className="cardOd__Header">
          <h4 className="cardOd__Heading">Completed Orders</h4>
        </div>
        <div className="cardOd__Count">
          <h5 className="cardOd__Num">9999</h5>
          <i class="bi bi-boxes"></i>
        </div>
      </div>
    </>
  );
}

export default CardOrder;
