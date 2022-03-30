import React, { useState, useEffect } from "react";
import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  documentId,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import fireDb from "../../firebase";
import "./RemoveVehicle.css";
import LorryFront from "../../images/lorryFront.jpg";
import LorryBack from "../../images/lorryBack.png";

function RemoveVehicle() {
  const [vehicle, setVehicle] = useState([]);

  const vehCollection = collection(fireDb, "vehicle_data");

  const delluser = collection(fireDb, "vehicle_data");
  const [dellData, setDellData] = useState([]);

  useEffect(() => {
    const getVeh = async () => {
      const data = await getDocs(vehCollection);
      console.log(data);
      setVehicle(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getVeh();
  }, []);

  const onDelete = async (id) => {
    if (window.confirm("Are you sure! You want to Delete this User?")) {
      await deleteDoc(doc(fireDb, "vehicle_data", id));
    }
  };

  return (
    <>
      <div className="container-fluid" id="removevehicle__Container">
        <div className="row">
          <div className="col-md-12">
            <div className="removevehicle__Header">
              <h4 className="updateuser__Heading">Remove Regitered Vehicle</h4>

              <div className="removevehicle__Searching">
                <form class="d-flex removevehicle__SearchData">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search by Vehicle Number"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </div>
            </div>

            <div className="removevehicle__Body">
              <table className="table text-center table__Vehicle">
                <thead className="table-dark">
                  <tr>
                    <th>Vehicle Number (Plate No)</th>
                    <th>Regional Center</th>
                    <th>Vehicle Type</th>
                    <th>Vehicle Availability</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicle.map((vehicles) => {
                    return (
                      <tr key={vehicles.id}>
                        <td>{vehicles.vehiNo}</td>
                        <td>{vehicles.regCenter}</td>
                        <td>{vehicles.vehiType}</td>
                        <td>{vehicles.vehiAvailable}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger btn__DeleteVehicle"
                            name="del__Vehicle"
                            id="del__Vehicle"
                            onClick={() => onDelete(vehicles.id)}
                          >
                            <i class="bi bi-trash-fill"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RemoveVehicle;
