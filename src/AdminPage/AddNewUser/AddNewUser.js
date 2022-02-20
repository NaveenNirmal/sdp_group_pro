import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import fireDb from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {addDoc, collection, getDocs} from 'firebase/firestore'
import "./AddNewUser.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import newUserValidation from './AddNewUserValidation'

function AddNewUser() {

  const auth = getAuth();

  const empCollection = collection(fireDb, 'employee_data');

  const initialState = {
    empFullName:'',
    empContactNo:'',
    empEmail:'',
    empPassword:'',
    empGender: '',
    empBday:'',
    empCenter:'',
    empAddress:'',
    empAvailability:'',
    empType:''
  }

  const [state, setState] = useState(initialState);

  const [empData, setEmpData] = useState({});

  const {empUser} = useParams();

  useEffect(() => {

    const getEmps = async () => {
        const data = await getDocs(empCollection);

        setEmpData(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        
        console.log(data)
    }
    getEmps();
    newUserValidation();

  },[empUser])

  useEffect(() => {
    if(empUser){

      setState({...empData[empUser]})
      // console.log(empUser)

    }else{

      setState({...initialState})

    }
    return () => {
      setState({...initialState})
    }
  }, [empUser,empData])

  const {empFullName,empContactNo,empEmail,empPassword,empGender,empBday,empCenter,empAddress,empAvailability,empType} = state;

  const handleInputChange = (e) => {
    const {name,value} = e.target
    setState({...state, [name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, state.empEmail,state.empPassword).then(userCred => {
      const user = userCred.user;
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })

    await addDoc(collection(fireDb,"employee_data"), state).then(user => {
      const newUser = user.id;
      toast.success("Success");
    }).catch(err => {
      toast.error(err)
    })

  }

  // const initialValues = {
  //   empFullName: "",
  //   empContactNo: "",
  //   empBday: "",
  //   empCenter: "",
  //   empAddress: "",
  //   empAvailability: "",
  //   empType: "",
  // };
  
  /*const [fieldValues, setFieldValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false); */

  /*const [focused,setFocused] = useState(false);*/

   /* const handleFocus = (e) => {
      setFocused(true);
  }*/

    /* const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValues({ ...fieldValues, [name]: value });
  };*/

  // const validate = (values) => {
  //   const errors = {};
  //   // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.empFullName) {
  //     errors.empFullName = "Username cannot be Empty";
  //   }
  //   if (!values.empContactNo) {
  //     errors.empContactNo = "Contact Number is Required";
  //   }
  //   if (!values.empBday) {
  //     errors.empBday = "Date of Birth must be Select";
  //   }
  //   if (!values.empCenter) {
  //     errors.empCenter = "Please select a Center";
  //   }
  //   if (!values.empAddress) {
  //     errors.empAddress = "Permenant Address is Required";
  //   }
  //   if (!values.empAvailability) {
  //     errors.empAvailability = "Please Select a Availability Status";
  //   }
  //   if (!values.empType) {
  //     errors.empType = "Please Select Employee Type";
  //   }

  //   return errors;
  // };

  return (
    <>
      <div className="container-fluid" id="addnewuser__Container">
      <ToastContainer theme="colored"/>
        <div className="row">
          <div className="card mt-2 card__User">
            <div className="card__Header">
              <h4 className="card__Heading">New User Registration</h4>
            </div>
            <hr></hr>
            <div className="card__Form">
              <form className="row g-4" onSubmit={handleSubmit} id="form_AddNewUser">
                <div className="form-group col-md-3">
                  <label for="empFullName" className="form-label">
                    Employee Full Name
                  </label>
                  <input type="text"
                    className="form-control"
                    name="empFullName"
                    placeholder="Employee Full Name"
                    id="empFullName"
                    value={empFullName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group col-md-3">
                  <label for="empContactNo" className="form-label">
                    Contact No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="empContactNo"
                    placeholder="Contact No"
                    id="empContactNo"
                    value={empContactNo}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group col-md-3">
                  <label for="empEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="empEmail"
                    placeholder="example@domain.com"
                    id="empEmail"
                    value={empEmail}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group col-md-3">
                  <label for="empPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="empPassword"
                    placeholder="Password"
                    id="empPassword"
                    value={empPassword}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group col-md-3 div__Gender">
                  <label for="empGender" className="form-label">
                    Gender
                  </label>

                  <input
                    type="radio"
                    className="form-check-input"
                    name="empGender"
                    id="empGenderMale"
                    selected
                    value="Male"
                    checked={state.empGender === 'Male'}
                    onChange={handleInputChange}
                  />
                  <label className="form-label male">Male</label>

                  <input
                    type="radio"
                    className="form-check-input"
                    name="empGender"
                    id="empGenderFemale"
                    value={state.empGender}
                    value="Female"
                    checked={state.empGender === 'Female'}
                    onChange={handleInputChange}
                  />
                  <label className="form-label female">Female</label>
                </div>

                <div className="form-group col-md-3 div__Birth">
                  <label for="empBday" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="empBday"
                    id="empBday"
                    value={empBday}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group col-md-6">
                  <label for="empCenter" className="form-label">
                    Center Name
                  </label>
                  <select
                    className="form-select"
                    name="empCenter"
                    id="empCenter"
                    value={empCenter}
                    onChange={handleInputChange}
                  >
                    <option selected disabled>
                      -- Select Center --
                    </option>
                    <option value="Gampaha">Gampaha</option>
                  </select>
                </div>

                <div className="form-group col-md-12">
                  <label for="empAddress" className="form-label">
                    Permanent Address
                  </label>
                  <textarea
                    className="form-control"
                    name="empAddress"
                    id="empAddress"
                    value={empAddress}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-group col-md-6">
                  <label for="empAvailability" className="form-label">
                    Availablity
                  </label>
                  <select
                    className="form-select"
                    name="empAvailability"
                    id="empAvailability"
                    value={empAvailability}
                    onChange={handleInputChange}
                  >
                    <option selected disabled>
                      -- Select Availability --
                    </option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  <label for="empType" className="form-label">
                    Employee Type
                  </label>
                  <select
                    className="form-select"
                    name="empType"
                    id="empType"
                    value={empType}
                    onChange={handleInputChange}
                  >
                    <option selected disabled>
                      -- Select Type --
                    </option>
                    <option value="Rider">Rider</option>
                    <option value="Driver">Driver</option>
                    <option value="Customer Care">Customer Care</option>
                    <option value="Center Manager">Center Manager</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  name="saveEmployee"
                  id="saveEmployee"
                >
                  Save New User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewUser;
