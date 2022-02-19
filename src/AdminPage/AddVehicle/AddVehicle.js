import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import './AddVehicle.css';
import fireDb from '../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addNewVehicleValidate from './AddVehicleValidation'

function AddVehicle() {

    useEffect(() => {
        addNewVehicleValidate();
    }, [])

    const [values, setValues] = useState({
        vehiNo:'',
        regCenter:'',
        vehiType:'',
        vehiAvailable:''
    })

    const handleInputChange = (e) => {
        e.persist();
        setValues({...values, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(fireDb, 'vehicle_data'), values).then(res => {
            const newVehicle = res.id;
            toast.success('Vehicle Adding Success')
        }).catch(err => {
            toast.error(`Error: ${err}`)
        })
    }
  return (
        <>
            <div className="container-fluid" id="addvehicle__Container">
            <ToastContainer theme="colored"/>
                <div className="row">
                    <div className="card mt-2 card__Vehicle">
                        <div className="card__Header">
                            <h4 className="card__Heading">New Vehicle Registration</h4>
                        </div>
                        <hr></hr>
                        <div className="card__FormVehicle">
                            <form className="row g-4" onSubmit={handleSubmit} id="addVehicle">
                                <div className="form-group col-md-6">
                                    <label for="vehiNo">Vehicle Number (Plate No)</label>
                                    <input type="text" className="form-control" name="vehiNo"
                                    id="vehiNo" placeholder="xxx-xxxx"
                                    value={values.vehiNo}
                                    onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label for="regCenter">Regional Center</label>
                                    <select className="form-select" name="regCenter"
                                     id="regCenter"
                                     value={values.vehiNo}
                                     onChange={handleInputChange}
                                    >
                                        <option disabled selected>--Select Regional Center--</option>
                                        <option value="Kalutara">Kalutara</option>
                                        <option value="Gampaha">Gampaha</option>
                                        <option value="Colombo">Colombo</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label for="vehiType">Vehicle Type</label>
                                    <select className="form-select" name="vehiType"
                                    id="vehiType"
                                    value={values.vehiType}
                                    onChange={handleInputChange}
                                    >
                                        <option disabled selected>--Select Vehicle Type--</option>
                                        <option value="Lorry">Lorry</option>
                                        <option value="Motor Bike">Motor Bike</option>
                                        <option value="Van">Van</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label for="vehiAvailable">Vehicle Availability</label>
                                    <select className="form-select" name="vehiAvailable" 
                                    id="vehiAvailable"
                                    value={values.vehiAvailable}
                                    onChange={handleInputChange}
                                    >
                                        <option disabled selected>--Select Vehicle Availability--</option>
                                        <option value="Available">Available</option>
                                        <option value="Not Available">Not Available</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary" name="saveEmployee" id="saveEmployee" disabled={values?false:true}>Save Vehicle Details</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddVehicle;
