import React from 'react';
import BarChart from '../BarChart/BarChart';
import CardCustomer from '../CardCustomer/CardCustomer';
import CardOrder from '../CardOrder/CardOrder';
import CardRider from '../CardRider/CardRider';
import CardVehicle from '../CardVehicle/CardVehicle';
import LineChart from '../LineChart/LineChart';
import './Dashboard.css'

function Dashboard() {
    return (
        <>
            <div className="row" id="row">
                <div className="col-md-3" id="card__Details">
                    <CardCustomer/>
                </div>

                <div className="col-md-3" id="card__Details">
                    <CardRider/>
                </div>

                <div className="col-md-3" id="card__Details">
                    <CardOrder/>
                </div>

                <div className="col-md-3" id="card__Details">
                    <CardVehicle/>
                </div>
            </div>

            <div className="row" id="row">
                <div className="col-md-6">
                    <LineChart />
                </div>
                <div className="col-md-6">
                    <BarChart />
                </div>
            </div>
        </>
    )
}

export default Dashboard
