import AddNewUser from "../AdminPage/AddNewUser/AddNewUser"
import AddVehicle from "../AdminPage/AddVehicle/AddVehicle"
import Dashboard from "../AdminPage/Dashboard/Dashboard"
import PrintPage from "../AdminPage/PrintPage/PrintPage"
import ViewOrders from "../AdminPage/ViewOrders/ViewOrders"


const routes = [
    {path:'/adminmasterpage', exact:true, name:'Admin'},
    {path:'/adminmasterpage/dashboard', exact:true, name:'Dashboard', component:Dashboard},
    {path:'/adminmasterpage/addnewuser', exact:false,name:'AddNewUser', component:AddNewUser},
    {path:'/adminmasterpage/viewallorders',exact:false,name:'ViewOrders',component:ViewOrders},
    {path:'/adminmasterpage/printpage',exact:false,name:'PrintPage',component:PrintPage},
    {path:'/adminmasterpage/addvehicle',exact:false,name:'AddVehicle',component:AddVehicle},

]

export default routes