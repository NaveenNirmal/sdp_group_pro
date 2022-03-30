import React, {useState, useEffect} from 'react';
import './RegisteredUser.css'
import fireDb from '../../firebase'
import { collection, documentId, getDoc, getDocs } from 'firebase/firestore';
import MaterialTable from "material-table";
import { alpha } from '@material-ui/core/styles';


function RegisteredUser() {

    const [empUser, setEmpUser] = useState([]);

    const empCollection = collection(fireDb, 'employee_data');

    useEffect(() => {
        const getEmps = async () => {
            const data = await getDocs(empCollection);
            console.log(data)
            setEmpUser(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }

        getEmps();
    }, [])

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
            }
        ],
        rows:empUser.map((empUser) => {
            return{
                empid:empUser.id,
                empname:empUser.empFullName,
                contactno:empUser.empContactNo,
                centername:empUser.empCenter,
                address:empUser.empAddress,
                availability:empUser.empAvailability,
                emptype:empUser.empType
            }
        })
    }

    return (
        <>
            <div className="container-fluid" id="RegisteredData__Container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="RegisteredData__Header">
                            <h4 className="RegisteredData__Heading">Registered Users</h4>
                        </div>
                        <div className="RegisteredData__Table">
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

export default RegisteredUser
