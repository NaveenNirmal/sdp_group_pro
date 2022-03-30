import React, { useEffect, useState } from 'react';
import './RemoveUser.css';
import fireDb from '../../firebase';
import { collection, deleteDoc, deleteField, doc, documentId, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteUser } from 'firebase/auth';
import Swal from 'sweetalert2';
import MaterialTable from "material-table";
import { alpha } from '@material-ui/core/styles';

function RemoveUser() {

    const [empData, setEmpData] = useState([]);

    const empCollection = collection(fireDb, 'employee_data');

    const getEmps = async () => {
        const data = await getDocs(empCollection);

        setEmpData((await data).docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    useEffect(() => {
        getEmps();

    }, [])

    const onDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                deleteDoc(doc(fireDb, 'employee_data', id));
                toast.success(`${id} : User Data Deleted Successfully`);
                getEmps();

            }
          })
    }

    const data = {
        columns:[
            {
                title:"#EmpId",
                field:"empid"
            },
            {
                title:"Employee Name",
                field:"empname"
            },
            {
                title:"Contact No",
                field:"contactno"
            },
            {
                title:"Center Name",
                field:"centername"
            },
            {
                title:"Permanent Address",
                field:"address"
            },
            {
                title:"Availablity",
                field:"availability"
            },
            {
                title:"Employee Type",
                field:"emptype"
            },
            {
                title:"Action",
                field:"action"
            },
        ],
        rows:empData.map((empUser) => {
            return{
                empid:empUser.id,
                empname:empUser.empFullName,
                contactno:empUser.empContactNo,
                centername:empUser.empCenter,
                address:empUser.empAddress,
                availability:empUser.empAvailability,
                emptype:empUser.empType,
                action:<button className="btn btn-danger" title="Delete Item" onClick={() => onDelete(empUser.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 
                    .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
                </button>
            }
        })
    }

    return (
        <>
            <div className="container-fluid" id="updateuser__Container">
            <ToastContainer theme="colored"/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="updateuser__Header">
                            <h4 className="updateuser__Heading">Remove Exisiting User</h4>
                        </div>

                        <div className="updateuser__Table">
                            <MaterialTable
                                title={""}
                                data={data.rows}
                                columns={data.columns}
                                options={{
                                    sorting: true, search: true,
                                    searchFieldAlignment: "left", searchAutoFocus: true, searchFieldVariant: "standard",
                                    filtering: false, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
                                    paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
                                    exportAllData: true, exportFileName: "User Data", addRowPosition: "first", actionsColumnIndex: -1, selection: false,
                                    showSelectAllCheckbox: false, showTextRowsSelected: false,
                                    columnsButton: true,
                                    headerStyle:{textAlign:"center",backgroundColor:"#1e2d42",color:"#fff",padding:"5px",fontWeight:"bold"}
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RemoveUser
