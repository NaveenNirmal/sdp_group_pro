import AddNewUser from "../AdminSide/AddNewUser/AddNewUser"
import AddVehicle from "../AdminSide/AddVehicle/AddVehicle"
import AllPayment from "../AdminSide/AllPayment/AllPayment"
import CollectParcel from "../AdminSide/CollectParcel/CollectParcel"
import Dashboard from "../AdminSide/Dashboard/Dashboard"
import OnCallRequest from "../AdminSide/OnCallRequest/OnCallRequest"
import PrintPage from "../AdminSide/PrintPage/PrintPage"
import RegisteredUser from "../AdminSide/RegisteredUser/RegisteredUser"
import RegisteredVehicle from "../AdminSide/RegisteredVehicle/RegisteredVehicle"
import RemoveUser from "../AdminSide/RemoveUser/RemoveUser"
import RemoveVehicle from "../AdminSide/RemoveVehicle/RemoveVehicle"
import SendParcel from "../AdminSide/SendParcel/SendParcel"
import TrackingPage from "../AdminSide/TrackingPage/TrackingPage"
import UpdateUser from "../AdminSide/UpdateUser/UpdateUser"
import UpdateVehicle from "../AdminSide/UpdateVehicle/UpdateVehicle"
import ViewOrders from "../AdminSide/ViewOrders/ViewOrders"
import PracelFromOtherCenter from "../AdminSide/ParcelFromOtherCenter/ParcelFromOtherCenter"
import DeliverToReciver from "../AdminSide/DeliverParcelToReciver/DeliverParcelToReciver"


const routes = [
    {path:'/adminmasterpage', exact:true, name:'Admin'},
    {path:'/adminmasterpage/dashboard', exact:true, name:'Dashboard', component:Dashboard},
    {path:'/adminmasterpage/addnewuser', exact:true,name:'AddNewUser', component:AddNewUser},
    {path:'/adminmasterpage/updateuser',exact:true,name:'UpdateUser',component:UpdateUser},
    {path:'/adminmasterpage/removeeuser',exact:true,name:'RemoveUser',component:RemoveUser},
    {path:'/adminmasterpage/registeredusers',exact:true,name:'RegisteredUser',component:RegisteredUser},
    {path:'/adminmasterpage/viewallorders',exact:true,name:'ViewOrders',component:ViewOrders},
    {path:'/adminmasterpage/viewallpayments',exact:true,name:'AllPayment',component:AllPayment},
    {path:'/adminmasterpage/printpage',exact:true,name:'PrintPage',component:PrintPage},
    {path:'/adminmasterpage/addvehicle',exact:true,name:'AddVehicle',component:AddVehicle},
    {path:'/adminmasterpage/updatevehicle',exact:true,name:'UpdateVehicle',component:UpdateVehicle},
    {path:'/adminmasterpage/removevehicle',exact:true,name:'RemoveVehicle',component:RemoveVehicle},
    {path:'/adminmasterpage/registeredvehicle',exact:true,name:'RegisteredVehicle',component:RegisteredVehicle},
    {path:'/adminmasterpage/prcelfromanothercenter',exact:true,name:'PracelFromOtherCenter',component:PracelFromOtherCenter},
    {path:'/adminmasterpage/tracking/:id',exact:true,name:'TrackingPage',component:TrackingPage},
    {path:'/adminmasterpage/oncallrequest',exact:true,name:'OnCalRequest',component:OnCallRequest},
    {path:'/adminmasterpage/delivertoreciver',exact:true,name:'DeliverToReciver',component:DeliverToReciver},
    {path:'/adminmasterpage/sendparcel',exact:true,name:'SendParcel',component:SendParcel},
    {path:'/adminmasterpage/collectparcels',exact:true,name:'CollectParcel',component:CollectParcel}

]

export default routes